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
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxZoom: 16,
      });
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
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
  const setSatelliteStyle = () => {
    map.setStyle("mapbox://styles/mapbox/satellite-streets-v11");
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
            <IonIcon icon={mapOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={() => setStreetStyle()}>
            <IonIcon icon={carSportOutline}></IonIcon>˝
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
