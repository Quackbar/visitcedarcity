import React, { useRef, useEffect, useState } from "react";

import {
  IonChip,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import {
  layersOutline,
  navigateOutline,
  carSportOutline,
  prismOutline,
  pinOutline,
  fastFoodOutline,
  iceCreamOutline,
  telescopeOutline,
  logoAppleAr,
  cameraOutline,
  thunderstormOutline,
  mapOutline,
  homeOutline,
  trailSignOutline,
  bedOutline,
  shieldOutline,
  storefrontOutline,
  sunnyOutline,
  bonfireOutline,
  colorPaletteOutline,
  fishOutline,
  ticketOutline,
  wineOutline,
} from "ionicons/icons";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// @ts-ignore

import mapboxgl, { Map as MapDataType } from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Toast } from "@capacitor/toast";

import "mapbox-gl/dist/mapbox-gl.css";
import "../assets/scss/Map.scss";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";


const showToast = async (msg: string) => {
  await Toast.show({
      text: msg
  })
};

const Map: React.FC = () => {
  const [map, setMap] = useState<MapDataType>();
  const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;
  const twcApiKey = "2ec2232d72f1484282232d72f198421d";
  // showToast("Swipe up with two fingers to see the map in 3D");
  const [radar, setRadar] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [satellite, setSatellite] = useState(false);
  const [position, setPosition] = useState<Geoposition>();

  const getLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setPosition(position);
    } catch (e) {}
  };

  const timeSlices = fetch("https://api.weather.com/v3/TileServer/series/productSet/PPAcore?apiKey=" + twcApiKey);

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-113.081305, 37.680057],
        // pitch: 60,
        zoom: 9,
        pitch: 30,
        bearing: 0,
      })
    );
  }, []);

  useEffect(() => {
    if (map === undefined) return;

    map.on("load", () => {
      map.resize();
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxZoom: 16,
      });

      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      // map.setFog({
      //   'range': [-1, 1.5],
      //   'color': 'white trany',
      //   'horizon-blend': 0.1
      // });
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        })
      );
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 80.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
      // showToast("Swipe up with two fingers to see the map in 3D");
    });
  }, [map]);

  const centerMap = () => {
    map.flyTo({
      center: [-113.061306, 37.678057],

      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  const food: mapMarker = {
    color: "#ff3333",
    coords: [
      [-113.06277995786483, 37.67752333293612],
      [-113.06307790517457, 37.6775077919207],
      [-113.06211643508729, 37.67753531295037],
      [-113.06156358789482, 37.67861592936657],
    ],
  };
  const icecream: mapMarker = {
    color: "#ffdddd",
    coords: [
      [-113.061979, 37.681917],
      [-113.085447, 37.652941],
      [-113.061297, 37.680767],
    ],
  };
  const lookouts: mapMarker = {
    color: "#4444ff",
    coords: [
      [-113.0679, 37.6819],
      [-113.0857, 37.2941],
      [-113.0297, 37.680767],
    ],
  };
  const ar: mapMarker = {
    color: "#dddddd",
    coords: [
      [-113.06179, 37.68197],
      [-113.085447, 37.62941],
      [-113.0612, 37.68767],
    ],
  };
  const picture: mapMarker = {
    color: "#55ff55",
    coords: [
      [-113.06199, 37.81917],
      [-113.08547, 37.65241],
      [-113.06297, 37.60767],
    ],
  };

  type mapMarker = {
    color: string;
    coords: [number, number][];
  };

  var currentMarkers: mapboxgl.Marker[] = [];

  function makeMarkers(val: mapMarker) {
    if (currentMarkers !== null) {
      for (var i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
      }
    }
    let color = val.color;

    val.coords.forEach((coord) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<img src="https://images.squarespace-cdn.com/content/v1/5ce2e2957873390001631a70/1584648977627-ZZK0F60Q0SRS6ZYST0X5/573A87F1-241C-4210-A951-FEA4CE8718C4.jpg?format=2500w"/><h1>Centros Woodfired Pizzaria</h1><a href="https://www.google.com/maps/place/Centro+Woodfired+Pizzeria/@37.678244,-113.0633694,18.21z/data=!4m5!3m4!1s0x80b561ba4714611d:0x7aec392aed6bea71!8m2!3d37.6775706!4d-113.0626666">more info</a>'
      );
      var oneMarker = new mapboxgl.Marker({
        color: color,
        draggable: false,
      })
        .setLngLat(coord)
        .setPopup(popup)
        .addTo(map);

      currentMarkers.push(oneMarker);
    });
  }
  const setOutdoorMode = () => {
    if (outdoor) window.location.reload();
    map.setStyle("mapbox://styles/mapbox/outdoors-v11");
    setOutdoor(!outdoor);
    if (radar) {
      map.removeLayer("radar");
      map.removeSource("twcRadar");
    }
    map.removeLayer("sky");
    map.setTerrain();
    map.removeSource("mapbox-dem");

    try {
      map.removeLayer("satellite");
      map.removeSource("satellite");
    } catch (error) {
      console.log("no satelllite");
    }
  };

  const setSatelliteStyle = () => {
    map.addLayer({
      id: "satellite",
      source: { type: "raster", url: "mapbox://mapbox.satellite", tileSize: 256 },
      type: "raster",
    });
    map.moveLayer("satellite", "pitch-outline");
    if (radar) map.moveLayer("satellite", "radar");
    showToast("Swipe up with two fingers to see in 3D");
    setSatellite(true);
  };
  
  const addRadarLayer = () => {
    if (radar) {
      map.removeLayer("radar");
      map.removeSource("twcRadar");
      setRadar(false);
    } else {
      timeSlices
        .then((res) => res.json())
        .then((res) => {
          const radarTimeSlices = res.seriesInfo.radar.series;
          const latestTimeSlice = radarTimeSlices[0].ts;

          // insert the latest time for radar into the source data URL
          map.addSource("twcRadar", {
            type: "raster",
            tiles: [
              "https://api.weather.com/v3/TileServer/tile/radar?ts=" +
                latestTimeSlice +
                "&xyz={x}:{y}:{z}&apiKey=" +
                twcApiKey,
            ],
            tileSize: 256,
          });

          // place the layer before the "aeroway-line" layer
          map.addLayer({
            id: "radar",
            type: "raster",
            source: "twcRadar",
            paint: {
              "raster-opacity": 0.5,
            },
          });
          setRadar(true);
        });
    }
  };
  const setStreetStyle = () => {
    map.removeLayer("satellite");
    map.removeSource("satellite");
    setSatellite(false);
  };

  return (
    <IonPage id="map-page" onLoad={getLocation}>
      <IonFab slot="fixed" vertical="bottom" horizontal="start">
        <SafeAreaWrapper>
          <IonFabButton size="small" onClick={() => centerMap()}>
            <IonIcon icon={homeOutline}></IonIcon>
          </IonFabButton>
        </SafeAreaWrapper>
      </IonFab>

      {outdoor ? (
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <SafeAreaWrapper>
            <IonFabButton size="small">
              <IonIcon icon={layersOutline}></IonIcon>
            </IonFabButton>
            <IonFabList side="start">
              {/* <IonFabButton onClick={() => addRadarLayer()}>
              <IonIcon icon={thunderstormOutline}></IonIcon>
            </IonFabButton> */}
              <IonChip class="white" onClick={() => setOutdoorMode()}>
                <IonIcon icon={mapOutline}></IonIcon>
                <IonLabel>Regular Mode</IonLabel>
              </IonChip>
            </IonFabList>
          </SafeAreaWrapper>
        </IonFab>
      ) : (
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <SafeAreaWrapper>
            <IonFabButton size="small">
              <IonIcon icon={layersOutline}></IonIcon>
            </IonFabButton>
            <IonFabList side="top" class="left">
              {/* <IonFabButton onClick={() => addRadarLayer()}>
              <IonIcon icon={thunderstormOutline}></IonIcon>
            </IonFabButton> */}
              <IonGrid>
                <IonRow>
                  <IonRow>
                    <IonChip class={radar ? "green trany" : "white trany"} onClick={() => addRadarLayer()}>
                      <IonIcon icon={thunderstormOutline}></IonIcon>
                      <IonLabel>Weather Radar </IonLabel>
                    </IonChip>
                    <IonChip class={satellite ? "green trany" : "white trany"} onClick={() => setSatelliteStyle()}>
                      <IonIcon icon={mapOutline}></IonIcon>
                      <IonLabel>Satellite </IonLabel>
                    </IonChip>
                    <IonChip class={satellite ? "white trany" : "green trany"} onClick={() => setStreetStyle()}>
                      <IonIcon icon={carSportOutline}></IonIcon>
                      <IonLabel>Streets Only</IonLabel>
                    </IonChip>
                    <IonChip class="white trany" onClick={() => setOutdoorMode()}>
                      <IonIcon icon={trailSignOutline}></IonIcon>
                      <IonLabel>Outdoor Mode</IonLabel>
                    </IonChip>
                  </IonRow>
                  <IonRow></IonRow>
                </IonRow>
              </IonGrid>
            </IonFabList>
          </SafeAreaWrapper>
        </IonFab>
      )}

      <IonFab slot="fixed" vertical="top" horizontal="start">
        <SafeAreaWrapper>
          <IonFabButton size="small">
            <IonIcon icon={pinOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton onClick={() => makeMarkers(icecream)}>
              <IonIcon icon={fastFoodOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(food)}>
              <IonIcon icon={shieldOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(lookouts)}>
              <IonIcon icon={bedOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(ar)}>
              <IonIcon icon={sunnyOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(picture)}>
              <IonIcon icon={storefrontOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(icecream)}>
              <IonIcon icon={colorPaletteOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(food)}>
              <IonIcon icon={wineOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(lookouts)}>
              <IonIcon icon={bonfireOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(ar)}>
              <IonIcon icon={carSportOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(picture)}>
              <IonIcon icon={ticketOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(icecream)}>
              <IonIcon icon={fishOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(food)}>
              <IonIcon icon={telescopeOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => makeMarkers(lookouts)}>
              <IonIcon icon={trailSignOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </SafeAreaWrapper>
      </IonFab>
      <IonContent scrollY={false}>
        <div id="map" ref={mapContainer} style={{ width: "100vw", height: "100vh" }} />
      </IonContent>
    </IonPage>
  );
};
export default Map;
