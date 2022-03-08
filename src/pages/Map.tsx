import React, { useRef, useEffect, useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// @ts-ignore
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";
import "../assets/scss/Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";



const Map: React.FC = () => {
  const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only created once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [-113.061305, 37.683057],
      zoom: 9,
      pitch: 0,
    });

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
  }, []);

  return (
    <IonPage id="map-page">
      <IonContent scrollY={false}>
        <div
          id="map"
          ref={mapContainer}
          style={{ width: "100vw", height: "100vh" }}
        />
      </IonContent>
    </IonPage>
  )
}
export default Map;