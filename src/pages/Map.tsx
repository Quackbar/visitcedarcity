import React, { useRef, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonLoading,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
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
  settingsOutline,
} from "ionicons/icons";
// @ts-ignore

import mapboxgl, { Map as MapDataType } from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Toast } from "@capacitor/toast";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

import "mapbox-gl/dist/mapbox-gl.css";
import { AllCategories, AttractionItem } from "../models/defaultModels";
import { connect } from "../data/context/connect";
import closestIndexTo from "date-fns/closestIndexTo/index.js";
import { updateSearchText } from "../data/context/actions";
import { getMode } from "@ionic/core";

interface DispatchProps {
  updateSearchText: typeof updateSearchText;
}
interface StateProps {
  attractionItems: AttractionItem[];
  mapAttractions: { [id: string]: { name: string; icon: string; color: string; categories: AllCategories[] } };
  searchText: string | undefined;
}

type MapProps = {} & StateProps & DispatchProps;
const showToast = async (msg: string) => {
  await Toast.show({
    text: msg,
  });
};

const Map: React.FC<MapProps> = ({ attractionItems, mapAttractions, searchText, updateSearchText }) => {
  const { id } = useParams<{ id: string | undefined }>();

  // map
  const [map, setMap] = useState<MapDataType>();
  // map layers
  const [satelliteLayerVisible, setSatelliteLayerVisible] = useState(false);
  const [outdoorLayerVisible, setOutdoorLayerVisible] = useState(false);
  const [radarLayerVisible, setRadarLayerVisible] = useState(false);
  const [mapIsLoaded, setMapIsLoaded] = useState<boolean>(false);
  const [markers, setMarkers] = useState<{ [id: string]: mapboxgl.Marker[] }>({});
  const [requestedMarkerID, setRequestedMarkerID] = useState<string | undefined>(id);
  const [showPinsModal, setShowPinsModal] = useState<boolean>(false);
  const [showLayersModal, setShowLayersModal] = useState<boolean>(false);
  const [filteredAttractions, setFilteredAttractions] = useState<AttractionItem[]>([]);

  const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;
  const pageRef = useRef<HTMLElement>(null);

  const ios = getMode() === "ios";
  const twcApiKey = "2ec2232d72f1484282232d72f198421d";
  const timeSlices = fetch("https://api.weather.com/v3/TileServer/series/productSet/PPAcore?apiKey=" + twcApiKey);

  // create map
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmVybmFyZGtpbnR6aW5nIiwiYSI6ImNrenpxc2UwejBjczAzYnMwOXhjeW1zMDEifQ.R_WjPk9TCgHbs-yKfPC1iQ";

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
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        }),
        "bottom-right"
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

  // manage requested marker
  useEffect(() => {
    if (!mapIsLoaded) return;
    // remove previous marker
    removeMarkers("requested");

    if (requestedMarkerID) {
      const numberID = Number(requestedMarkerID);
      const requestedMarker = attractionItems.find((item) => item.id === numberID);
      if (requestedMarker) {
        addMarkers("requested", [requestedMarker]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapIsLoaded, requestedMarkerID]);

  // search text changes
  useEffect(() => {
    if (searchText !== undefined) {
      let filteredResults: AttractionItem[] = [];
      filteredResults = attractionItems.filter((s) => s.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      setFilteredAttractions(filteredResults);
    }
  }, [attractionItems, searchText]);

  // center map on Cedar City
  const centerMap = () => {
    map.flyTo({
      center: [-113.061306, 37.678057],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  const makeMarkerPopupHTML: (item: AttractionItem) => string = (item) => {
    return `<img src="${item.image}"/><h1 class="trublack">${item.title}</h1><p class="trublack">${
      item.description.substring(0, 100) + "..."
    }</p><a href="${item.url}">more info</a>`;
  };

  // add marker
  const addMarkers = (key: string, attractionItems: AttractionItem[]) => {
    const newMarkers: mapboxgl.Marker[] = [];
    const markerColor = mapAttractions[key]
      ? mapAttractions[key].color
      : Math.floor(Math.random() * 16777215).toString(16);

    attractionItems.forEach((result) => {
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
  };

  // remove marker if exists
  const removeMarkers = (key: string) => {
    if (markers[key]) {
      markers[key].forEach((marker) => {
        marker.remove();
      });
      setMarkers({ ...markers, [key]: [] });
    }
  };

  const toggleMarkers = (key: string) => {
    // remove requested marker
    removeMarkers("requested");

    if (markers[key]) {
      removeMarkers(key);
    } else {
      // create markers
      let filteredResults: AttractionItem[] = [];
      for (let selectedFilter of mapAttractions[key].categories) {
        const resultsForFilter = attractionItems.filter((item) => {
          return item.categories.includes(selectedFilter);
        });
        for (let filterResult of resultsForFilter) {
          if (!filteredResults.includes(filterResult)) {
            filteredResults.push(filterResult);
          }
        }
      }
      addMarkers(key, filteredResults);
    }
  };

  const setOutdoorMode = () => {
    if (outdoorLayerVisible) window.location.reload();
    map.setStyle("mapbox://styles/mapbox/outdoors-v11");
    setOutdoorLayerVisible(!outdoorLayerVisible);
    if (radarLayerVisible) {
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
    if (radarLayerVisible) map.moveLayer("satellite", "radar");
    showToast("Swipe up with two fingers to see in 3D");
    setSatelliteLayerVisible(true);
  };

  const setStreetStyle = () => {
    try {
      map.removeLayer("satellite");
      map.removeSource("satellite");
      setSatelliteLayerVisible(false);
    } catch (error) {}
  };

  const addRadarLayer = () => {
    if (radarLayerVisible) {
      map.removeLayer("radar");
      map.removeSource("twcRadar");
      setRadarLayerVisible(false);
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
          setRadarLayerVisible(true);
        });
    }
  };

  return (
    <IonPage id="map-page" className={`${!mapIsLoaded && "isLoading"}`} ref={pageRef}>
      <IonFab slot="fixed" vertical="bottom" horizontal="start">
        <IonFabButton size="small">
          <IonIcon icon={settingsOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={pinOutline} onClick={() => setShowPinsModal(true)} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={layersOutline} onClick={() => setShowLayersModal(true)} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={homeOutline} onClick={() => centerMap()} />
          </IonFabButton>
        </IonFabList>
      </IonFab>

      <IonContent scrollY={false}>
        <div id="map-search-bar-wrapper">
          <SafeAreaWrapper>
            <IonSearchbar
              value={searchText}
              placeholder="Search"
              onIonChange={(e: CustomEvent) => updateSearchText(e.detail.value)}
            />
            <div id="results-wrapper">
              <IonList lines={filteredAttractions.length < 2 ? "none" : ios ? "inset" : "full"}>
                {searchText !== "" && searchText !== undefined ? (
                  filteredAttractions.length > 0 ? (
                    filteredAttractions.map((attraction, index) => {
                      return (
                        <IonItem
                          key={index}
                          onClick={() => {
                            setRequestedMarkerID("" + attraction.id);
                            updateSearchText(undefined);
                          }}
                        >
                          <IonLabel>{attraction.title}</IonLabel>
                        </IonItem>
                      );
                    })
                  ) : (
                    <IonItem>
                      <IonLabel>No Results</IonLabel>
                    </IonItem>
                  )
                ) : (
                  <></>
                )}
              </IonList>
            </div>
          </SafeAreaWrapper>
        </div>

        <div id="map" ref={mapContainer} />
      </IonContent>

      <IonModal
        isOpen={showPinsModal}
        onDidDismiss={() => setShowPinsModal(false)}
        swipeToClose={true}
        presentingElement={pageRef.current!}
      >
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonTitle>Map Pins</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines={ios ? "inset" : "full"}>
            <IonItemGroup>
              {Object.keys(mapAttractions).map((key, index) => (
                <IonItem key={index} onClick={() => toggleMarkers(key)}>
                  <IonLabel>{mapAttractions[key].name}</IonLabel>
                  <IonCheckbox
                    onClick={() => toggleMarkers(key)}
                    checked={markers[key] ? markers[key].length > 0 : false}
                    color="primary"
                  />
                </IonItem>
              ))}
            </IonItemGroup>
          </IonList>
        </IonContent>
      </IonModal>

      <IonModal
        isOpen={showLayersModal}
        onDidDismiss={() => setShowLayersModal(false)}
        swipeToClose={true}
        presentingElement={pageRef.current!}
      >
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonTitle>Map</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList lines={ios ? "inset" : "full"}>
            <IonItemGroup>
              <IonItemDivider sticky>
                <IonLabel>Layers</IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonLabel>Weather</IonLabel>
                <IonCheckbox onClick={() => addRadarLayer()} checked={radarLayerVisible} color="primary" />
              </IonItem>
            </IonItemGroup>
            <IonItemGroup>
              <IonItemDivider sticky>
                <IonLabel>Styles</IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonLabel>Satellite</IonLabel>
                <IonCheckbox onClick={() => setSatelliteStyle()} checked={satelliteLayerVisible} color="primary" />
              </IonItem>
              <IonItem>
                <IonLabel>Streets</IonLabel>
                <IonCheckbox onClick={() => setStreetStyle()} checked={!satelliteLayerVisible} color="primary" />
              </IonItem>
              <IonItem>
                <IonLabel>Outdoor</IonLabel>
                <IonCheckbox onClick={() => setOutdoorMode()} checked={outdoorLayerVisible} color="primary" />
              </IonItem>
            </IonItemGroup>
          </IonList>
        </IonContent>
      </IonModal>

      <IonLoading cssClass="my-custom-class" isOpen={!mapIsLoaded} message={"Loading Map..."} />
    </IonPage>
  );
};

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    attractionItems: state.attractionItems,
    mapAttractions: state.mapAttractions,
    searchText: state.user.searchText,
  }),
  mapDispatchToProps: {
    updateSearchText,
  },
  component: Map,
});