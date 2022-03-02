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
import { Route, Redirect } from "react-router-dom";
import {
  homeOutline,
  searchOutline,
  mapOutline,
  personOutline,
} from "ionicons/icons";
import { AppContextProvider } from "./data/AppContext";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AttractionItemDetail from "./pages/AttractionItemDetail";
import Map from "./pages/Map";
import Account from "./pages/Account";

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
import './assets/scss/app.scss';

import Firebase from './assets/firebase/Firebase'

setupIonicReact();

const VisitCedarCity: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/discover" render={() => <Discover />} />
          <Route path="/discover/:id" component={AttractionItemDetail} />
          <Route exact path="/map" render={() => <Map />} />
          <Route exact path="/account" render={() => <Account />} />
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
          <IonTabButton tab="map" href="/map">
            <IonIcon icon={mapOutline} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

const App: React.FC = () => {

  Firebase.Firestore.getCedarCityWeather().then((data) => {
    console.log(data)
  })

  return (
    <AppContextProvider>
      <VisitCedarCity />
    </AppContextProvider>
  );
};

export default App;
