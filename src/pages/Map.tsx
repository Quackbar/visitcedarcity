import React, { useRef, useEffect, useState } from "react";

import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonPage,
} from "@ionic/react";
import {
  layersOutline,
  mapOutline,
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
import { AnyRecord } from "dns";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";

const Map: React.FC = () => {
  const [map, setMap] = useState<MapDataType>();
  const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
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
      var oneMarker = new mapboxgl.Marker({
        color: color,
        draggable: false
        }).setLngLat(coord)
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
            <IonIcon icon={prismOutline}>3D</IonIcon>
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
          <IonFabButton onClick={() => setStreetStyle()}>
            <IonIcon icon={telescopeOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => setStreetStyle()}>
            <IonIcon icon={logoAppleAr}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => setStreetStyle()}>
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


