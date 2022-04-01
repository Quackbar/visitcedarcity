import React, { useRef, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
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
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
// @ts-ignore
// import mapboxgl, { Map as MapDataType } from "!mapbox-gl"; 
import {
  layersOutline,
  carSportOutline,
  pinOutline,
  thunderstormOutline,
  mapOutline,
  homeOutline,
  trailSignOutline,
} from "ionicons/icons";
// @ts-ignore

import mapboxgl, { Map as MapDataType } from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Toast } from "@capacitor/toast";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

import "mapbox-gl/dist/mapbox-gl.css";
import { AllCategories, AttractionItem } from "../models/defaultModels";
import { connect } from "../data/context/connect";

interface StateProps {
  attractionItems: AttractionItem[];
  groupedAttractions: { [id: string]: { name: string; icon: string; color: string; categories: AllCategories[] } };
}
const showToast = async (msg: string) => {
  await Toast.show({
      text: msg
  })
};

const Map: React.FC<StateProps> = ({ attractionItems, groupedAttractions }) => {
  const [map, setMap] = useState<MapDataType>();
  const [radar, setRadar] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [satellite, setSatellite] = useState(false);
  const [position, setPosition] = useState<Geoposition>();
  const [mapIsLoaded, setMapIsLoaded] = useState<boolean>(false);
  const [markers, setMarkers] = useState<{ [id: string]: mapboxgl.Marker[] }>({});

  const { id } = useParams<{ id: string | undefined }>();

  const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;

  const twcApiKey = "2ec2232d72f1484282232d72f198421d";
  const timeSlices = fetch("https://api.weather.com/v3/TileServer/series/productSet/PPAcore?apiKey=" + twcApiKey);

  const getLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setPosition(position);
    } catch (e) {}
  };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";

    // create map
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

  // load map
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
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
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

      setMapIsLoaded(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useEffect(() => {
    if (mapIsLoaded) {
      // display marker if one is requested
      if (id) {
        const numberID = Number(id);
        const color = "#565656";
        const requestedMarker = attractionItems.find((item) => item.id === numberID);

        if (requestedMarker !== undefined && requestedMarker.coordinates !== undefined) {
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(makeMarkerPopupHTML(requestedMarker));

          const marker = new mapboxgl.Marker({
            color: color,
            draggable: false,
          })
            .setLngLat([requestedMarker.coordinates.lng, requestedMarker.coordinates.lat])
            .setPopup(popup)
            .addTo(map);

          popup.setLngLat([requestedMarker.coordinates.lng, requestedMarker.coordinates.lat]).addTo(map);

          setMarkers({ ...markers, requested: [marker] });
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapIsLoaded]);

  const centerMap = () => {
    map.flyTo({
      center: [-113.061306, 37.678057],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  const makeMarkerPopupHTML: (item: AttractionItem) => string = (item) => {
    return `<img src="${item.image}"/><h1>${item.title}</h1><p>${item.description.substring(0, 100)+"..."}</p><a href="${item.url}">more info</a>`;
  };

  const toggleMarkers = (key: string) => {
    // remove requested marker
    if (markers["requested"]) {
      markers["requested"].forEach((marker) => {
        marker.remove();
      });
    }

    if (markers[key]) {
      markers[key].forEach((marker) => {
        marker.remove();
      });
    } else {
      // create markers
      let filteredResults: AttractionItem[] = [];
      for (let selectedFilter of groupedAttractions[key].categories) {
        const resultsForFilter = attractionItems.filter((item) => item.categories?.some((e) => e === selectedFilter));

        for (let filterResult of resultsForFilter) {
          if (!filteredResults.includes(filterResult)) {
            filteredResults.push(filterResult);
          }
        }
      }

      const newMarkers: mapboxgl.Marker[] = [];
      const markerColor = groupedAttractions[key].color;
      filteredResults.forEach((result) => {
        if (result.coordinates) {
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(makeMarkerPopupHTML(result));

          newMarkers.push(
            new mapboxgl.Marker({
              color: markerColor,
              draggable: false,
            })
              .setLngLat([result.coordinates.lng, result.coordinates.lat])
              .setPopup(popup)
              .addTo(map)
          );
        }
      });
      setMarkers({ ...markers, [key]: newMarkers });
    }
  };

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

  const setStreetStyle = () => {
    map.removeLayer("satellite");
    map.removeSource("satellite");
    setSatellite(false);
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
  return (
    <IonPage id="map-page" className={`${!mapIsLoaded && "isLoading"}`} onLoad={getLocation}>
      <IonFab slot="fixed" vertical="bottom" horizontal="start">
        <SafeAreaWrapper>
          <IonFabButton size="small" onClick={() => centerMap()}>
            <IonIcon icon={homeOutline}></IonIcon>
          </IonFabButton>
        </SafeAreaWrapper>
      </IonFab>
      {outdoor ? (
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton size="small">
            <IonIcon icon={layersOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
            <IonChip class="white" onClick={() => setOutdoorMode()}>
              <IonIcon icon={mapOutline}></IonIcon>
              <IonLabel>Regular</IonLabel>
            </IonChip>
          </IonFabList>
        </IonFab>
      ) : (
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton size="small">
            <IonIcon icon={layersOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="top" class="left">
            <IonGrid>
              <IonRow>
                <IonChip class={radar ? "green trany" : "white trany"} onClick={() => addRadarLayer()}>
                  <IonIcon icon={thunderstormOutline}></IonIcon>
                  <IonLabel>Weather</IonLabel>
                </IonChip>
                <IonChip class={satellite ? "green trany" : "white trany"} onClick={() => setSatelliteStyle()}>
                  <IonIcon icon={mapOutline}></IonIcon>
                  <IonLabel>Satellite</IonLabel>
                </IonChip>
                <IonChip class={satellite ? "white trany" : "green trany"} onClick={() => setStreetStyle()}>
                  <IonIcon icon={carSportOutline}></IonIcon>
                  <IonLabel>Streets</IonLabel>
                </IonChip>
                <IonChip class="white trany" onClick={() => setOutdoorMode()}>
                  <IonIcon icon={trailSignOutline}></IonIcon>
                  <IonLabel>Outdoor</IonLabel>
                </IonChip>
              </IonRow>
            </IonGrid>
          </IonFabList>
        </IonFab>
      )}
      <IonFab slot="fixed" vertical="top" horizontal="start">
        <SafeAreaWrapper>
          <IonFabButton size="small">
            <IonIcon icon={pinOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonGrid>
              {Object.keys(groupedAttractions).map((key, index) => {
                return (
                  <IonCol key={index}>
                    <IonChip onClick={() => toggleMarkers(key)}>
                      <IonIcon icon={groupedAttractions[key].icon}></IonIcon>
                      <IonLabel>{groupedAttractions[key].name}</IonLabel>
                    </IonChip>
                  </IonCol>
                );
              })}
            </IonGrid>
          </IonFabList>
        </SafeAreaWrapper>
      </IonFab>
      <IonContent scrollY={false}>
        <div id="map" ref={mapContainer} />
      </IonContent>

      <IonLoading cssClass="my-custom-class" isOpen={!mapIsLoaded} message={"Loading Map..."} />
    </IonPage>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    attractionItems: state.attractionItems,
    groupedAttractions: state.groupedAttractions,
  }),
  component: Map,
});
