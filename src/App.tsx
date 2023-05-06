import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { homeOutline, searchOutline, mapOutline, personOutline } from "ionicons/icons";

import { AppContext, AppContextProvider } from "./data/context/AppContext";
import { loadUserData } from "./data/context/actions";

import HomeOrTutorial from "./components/HomeOrTutorial";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AttractionItemDetail from "./pages/AttractionItemDetail";
import Map from "./pages/Map";
import Account from "./pages/Account";
import Tutorial from "./pages/Tutorial";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./assets/scss/app.scss";

import { getBrianHeadWeather, getCedarWeather, getParoWeather } from "./assets/firebase/Firebase";
import { getBHSched, getCBAlerts, getCCSched, getSUMASched, getSUUPUpdates } from "./assets/data/ScheduleUpdater";
import { Timestamp } from "@firebase/firestore";
import React, { useContext, useEffect } from "react";
import { connect } from "./data/context/connect";

setupIonicReact({
  swipeBackEnabled: false,
});

let CedarImg = "";
let CedarTemp = "";
let ParoImg = "";
let ParoTemp = "";
let BrianImg = "";
let BrianTemp = "";

type MyReturnTypeItem = {
  Date?: Timestamp;
  conditions?: string;
  temp?: string;
};

getBrianHeadWeather().then((data) => {
  // console.log('brian head', data);
  var x: MyReturnTypeItem = data;
  BrianImg = x.conditions ?? "unknown";
  BrianTemp = x.temp ?? "unknown";
  localStorage.setItem("BrianImg", x.conditions ?? "unknown");
  localStorage.setItem("BrianTemp", x.temp ?? "unknown");
});
getCedarWeather().then((data) => {
  // console.log('cedar',data);
  var x: MyReturnTypeItem = data;
  CedarImg = x.conditions ?? "unknown";
  CedarTemp = x.temp ?? "unknown";
  localStorage.setItem("CedarImg", x.conditions ?? "unknown");
  localStorage.setItem("CedarTemp", x.temp ?? "unknown");
});
getParoWeather().then((data) => {
  // console.log('paro',data);
  var x: MyReturnTypeItem = data;
  ParoImg = x.conditions ?? "unknown";
  ParoTemp = x.temp ?? "unknown";
  localStorage.setItem("ParoImg", x.conditions ?? "unknown");
  localStorage.setItem("ParoTemp", x.temp ?? "unknown");
});
getBHSched();
getSUMASched();
getSUUPUpdates();
getCBAlerts();
getCCSched();

localStorage.setItem("blocker", "false")

interface StateProps {
  isLoading: boolean;
}
interface DispatchProps {
  loadUserData: typeof loadUserData;
}

interface IonicAppProps extends StateProps, DispatchProps {}

const VisitCedarCity: React.FC<IonicAppProps> = ({ isLoading, loadUserData }) => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <div></div>
  ) : (
    <IonApp className={`${state.user.darkTheme ? "dark-theme" : ""}`}>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/" component={HomeOrTutorial} exact />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/discover" render={() => <Discover />} />
            <Route path="/discover/:id" component={AttractionItemDetail} />
            <Route exact path="/map" render={() => <Map />} />
            <Route path="/map/:id" render={() => <Map />} />
            <Route exact path="/account" render={() => <Account />} />
            <Route path="/tutorial" component={Tutorial} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="discover" href="/discover">
              <IonIcon icon={searchOutline} />
              <IonLabel>Discover</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="map" href="/map">
              <IonIcon icon={mapOutline} />
              <IonLabel>Map</IonLabel>
            </IonTabButton> */}
            <IonTabButton tab="account" href="/account">
              <IonIcon icon={personOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

const VisitCedarCityConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    isLoading: state.user.isLoading,
  }),
  mapDispatchToProps: { loadUserData },
  component: VisitCedarCity,
});

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <VisitCedarCityConnected />
    </AppContextProvider>
  );
};

export default App;
