import React, { useRef, useEffect, useState } from "react";

import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonLabel,
  IonPage,
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
} from "ionicons/icons";

// @ts-ignore
import mapboxgl, { Map as MapDataType } from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";
import "../assets/scss/Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";

const Map: React.FC = () => {
  const [map, setMap] = useState<MapDataType>();
  const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        center: [-113.061305, 37.683057],
        zoom: 9,
        pitch: 0,
      })
    );
  }, []);

  useEffect(() => {
    if (map === undefined) return;

    map.on("load", () => {
      map.resize();
      // map.setStyle("mapbox://styles/mapbox/streets-v11")
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxZoom: 16,
      });
  
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      // map.setFog({
      //   'range': [-1, 1.5],
      //   'color': 'white',
      //   'horizon-blend': 0.1
      // });
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 90.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });

      });
  }, [map]);

  const centerMap = () => {};

  const food: mapMarker = {
    color: "#ff3333",
    coords: [
      [-113.06277995786483, 37.67752333293612],
      [-113.06307790517457, 37.6775077919207],
      [-113.06211643508729, 37.67753531295037],
      [-113.06156358789482, 37.67861592936657],
    ],
  }
  const icecream: mapMarker = {
    color: "#ffdddd",
    coords: [
      [-113.061979, 37.681917],
      [-113.085447, 37.652941],
      [-113.061297, 37.680767],
    ],
  }
  const lookouts: mapMarker = {
    color: "#4444ff",
    coords: [
      [-113.0679, 37.6819],
      [-113.0857, 37.2941],
      [-113.0297, 37.680767],
    ],
  }
  const ar: mapMarker = {
    color: "#dddddd",
    coords: [
      [-113.06179, 37.68197],
      [-113.085447, 37.62941],
      [-113.0612, 37.68767],
    ],
  }
  const picture: mapMarker = {
    color: "#55ff55",
    coords: [
      [-113.06199, 37.81917],
      [-113.08547, 37.65241],
      [-113.06297, 37.60767],
    ],
  }

  type mapMarker = {
    color: string;
    coords: [number,number][];
  }

  var currentMarkers: mapboxgl.Marker[] = [];

  
  function makeMarkers(val: mapMarker) {
    if (currentMarkers!==null) {
      for (var i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
      }
    }
    let color = val.color

    val.coords.forEach(coord => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Example'
        );
      var oneMarker = new mapboxgl.Marker({
        color: color,
        draggable: false
        }).setLngLat(coord)
        .setPopup(popup)
        .addTo(map);

        currentMarkers.push(oneMarker);
    })
    
  };
  const setSatelliteStyle = () => {
    map.setStyle("mapbox://styles/mapbox/satellite-streets-v11");

    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
    // map.setFog({
    //   'range': [-1, 1.5],
    //   'color': 'white',
    //   'horizon-blend': 0.1
    // });

  };
  const setStreetStyle = () => {
    map.setStyle("mapbox://styles/mapbox/streets-v11");
  };

  return (
    <IonPage id="map-page">
      <IonFab slot="fixed" vertical="top" horizontal="end">
        <IonFabButton size="small">
          <IonIcon icon={layersOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="bottom">
          <IonFabButton onClick={() => centerMap()}>
            <IonIcon icon={navigateOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => setSatelliteStyle()}>
            <IonIcon icon={prismOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => setStreetStyle()}>
            <IonIcon icon={carSportOutline}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <IonFab slot="fixed" vertical="top" horizontal="start">
        <IonFabButton size="small">
          <IonIcon icon={pinOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="bottom">
          <IonFabButton onClick={() => makeMarkers(icecream)}>
            <IonIcon icon={iceCreamOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => makeMarkers(food)}>
            <IonIcon icon={fastFoodOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => makeMarkers(lookouts)}>
            <IonIcon icon={telescopeOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => makeMarkers(ar)}>
            <IonIcon icon={logoAppleAr}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => makeMarkers(picture)}>
            <IonIcon icon={cameraOutline}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <IonContent scrollY={false}>
        <div
          id="map"
          ref={mapContainer}
          style={{ width: "100vw", height: "100vh" }}
        />
      </IonContent>
    </IonPage>
  );
};
export default Map;


