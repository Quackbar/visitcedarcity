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

import "../assets/scss/Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.resize()
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <IonPage id="map-page">
      <IonContent scrollY={false}>
        <div ref={mapContainer} className="map-container" />
      </IonContent>
    </IonPage>
  );
};
export default Map;
