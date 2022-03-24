import React, { Fragment, ReactElement, useState } from "react";
import { Browser } from "@capacitor/browser";
import {
  IonModal,
  IonDatetime,
  IonRefresher,
  IonRefresherContent,
  IonLabel,
  IonCard,
  IonContent,
  IonItem,
  IonPage,
  IonTitle,
  IonPopover,
  IonText,
  IonButton,
  IonGrid,
  IonActionSheet,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonList,
  IonCheckbox,
} from "@ionic/react";
import { getMode, RefresherEventDetail } from "@ionic/core";
import { trash, share, settingsOutline } from "ionicons/icons";

import SafeAreaWrapper from "../components/SafeAreaWrapper";

// modules
import Weather from "../modules/Weather";
import MountainData from "../modules/Mountaindata";
import ScheduleComp from "../modules/Schedule";
import SnowPack from "../modules/SnowPack";
import SkyData from "../modules/SkyData";
import RoadConditions from "../modules/RoadConditions";
import FestivalFood from "../modules/FestivalFood";

//firebase
import { getBrianHeadWeather, getCedarWeather, getParoWeather, getMountainData } from "../assets/firebase/Firebase";

import { format, parseISO } from "date-fns";
import { AllModules, ConditionsReturnType, MountainDataType, TodaysType } from "../models/defaultModels";
import { updateSelectedHomeModules } from "../data/context/actions";

// schedules
import { USFSchedule } from "../assets/data/USF";
import { UMRFSchedule } from "../assets/data/UMRF";
import { CCMASchedule } from "../assets/data/CCMA";
import { NSFSchedule } from "../assets/data/NSF";
import { OSUSchedule } from "../assets/data/OSU";
import { connect } from "../data/context/connect";

let CedarImg = "";
let CedarTemp = "";
let ParoImg = "";
let ParoTemp = "";
let BrianImg = "";
let BrianTemp = "";
let MDBaseDepth = "";
let MDOneDay = "";
let MDLiftsOpen = "";
let MDTrailsOpen = "";

getMountainData().then((data) => {
  var x: MountainDataType = data;
  MDBaseDepth = x.baseDepth ?? "unknown";
  MDOneDay = x.onedaySnowfall ?? "unknown";
  MDLiftsOpen = x.liftsOpen ?? "unknown";
  MDTrailsOpen = x.trailsOpen ?? "unknown";
  localStorage.setItem("MDBaseDepth", x.baseDepth ?? "unknown");
  localStorage.setItem("MDOneDaySnowfall", x.onedaySnowfall ?? "unknown");
  localStorage.setItem("MDLiftsOpen", x.liftsOpen ?? "unknown");
  localStorage.setItem("MDTrailsOpen", x.trailsOpen ?? "unknown");
});

getBrianHeadWeather().then((data) => {
  var x: ConditionsReturnType = data;
  BrianImg = x.conditions ?? "unknown";
  BrianTemp = x.temp ?? "unknown";
  localStorage.setItem("BrianImg", x.conditions ?? "unknown");
  localStorage.setItem("BrianTemp", x.temp ?? "unknown");
});

getCedarWeather().then((data) => {
  var x: ConditionsReturnType = data;
  CedarImg = x.conditions ?? "unknown";
  CedarTemp = x.temp ?? "unknown";
  localStorage.setItem("CedarImg", x.conditions ?? "unknown");
  localStorage.setItem("CedarTemp", x.temp ?? "unknown");
});

getParoWeather().then((data) => {
  var x: ConditionsReturnType = data;
  ParoImg = x.conditions ?? "unknown";
  ParoTemp = x.temp ?? "unknown";
  localStorage.setItem("ParoImg", x.conditions ?? "unknown");
  localStorage.setItem("ParoTemp", x.temp ?? "unknown");
});

const openSite = async () => {
  await Browser.open({ url: "https://visitcedarcity.com/events/" });
};

function checkSched(things: TodaysType[]) {
  if (things.length === 0) {
    return (
      <ScheduleComp
        name="Sorry No Events Today"
        timeStart=""
        timeEnd=""
        thelocation="Please Check out our Discovery page"
        url="https://visitcedarcity.com/"
      />
    );
  }
}

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  window.location.reload();
}

interface StateProps {
  selectedHomeModules: AllModules[];
}
interface DispatchProps {
  updateSelectedHomeModules: typeof updateSelectedHomeModules;
}

type HomeProps = StateProps & DispatchProps;

const Home: React.FC<HomeProps> = ({ selectedHomeModules, updateSelectedHomeModules }) => {
  const formatDate = (value: string) => {
    return format(parseISO(value), "MMM dd yyyy");
  };

  const ios = getMode() === "ios";

  const [showFilterModal, setShowFilterModal] = useState(false);

  // const [showWeather, setShowWeather] = useState(true);
  // const [showSchedule, setShowSchedule] = useState(true);
  // const [showFestivalFood, setShowFestivalFood] = useState(true);
  // const [showSkyData, setShowSkyData] = useState(true);
  // const [showRoadConditions, setShowRoadConditions] = useState(true);
  // const [showWinterMountainData, setShowWinterMountainData] = useState(true);
  // const [showSnowpack, setShowSnowpack] = useState(true);

  const today = new Date();
  const [popoverDate, setPopoverDate] = useState(today.toDateString());
  let things: TodaysType[] = [];
  things = [];
  const [formattedDate, setFormattedDate] = useState(new Date().toISOString().slice(0, 10));

  const yourSchedule = USFSchedule.schedule.concat(
    UMRFSchedule.schedule.concat(
      CCMASchedule.schedule.concat(NSFSchedule.schedule.concat(OSUSchedule.schedule.concat()))
    )
  );

  yourSchedule.map((item) => {
    if (item.date === formattedDate) {
      things = item.groups.map((group) => {
        return group.sessions[0] as TodaysType;
      });
    }
  });

  const toggleModule = (index: number) => {
    // flip the subscription state
    if (selectedHomeModules.includes(index)) {
      selectedHomeModules.splice(selectedHomeModules.indexOf(index), 1);
    } else {
      selectedHomeModules.push(index);
    }
    updateSelectedHomeModules([...selectedHomeModules]);
  };

  const HomeModules: { [key in AllModules]: { label: string; src: ReactElement } } = {
    [AllModules.Weather]: {
      label: "Weather",
      src: (
        <Weather
          CedarImg={CedarImg || String(localStorage.getItem("CedarImg"))}
          CedarTemp={CedarTemp || String(localStorage.getItem("CedarTemp"))}
          ParoImg={ParoImg || String(localStorage.getItem("ParoImg"))}
          ParoTemp={ParoTemp || String(localStorage.getItem("ParoTemp"))}
          BrianImg={BrianImg || String(localStorage.getItem("BrianImg"))}
          BrianTemp={BrianTemp || String(localStorage.getItem("BrianTemp"))}
        />
      ),
    },
    [AllModules.Schedule]: {
      label: "Schedule",
      src: (
        <IonCard class="basiccentered">
          <IonTitle class="centered">
            <br />
            Your Daily Schedule
            <br />
            <br />
          </IonTitle>
          {/* Datetime in overlay */}
          {/* <IonButton  class="centered" id="open-modal">Choose Custom Date</IonButton> */}
          <IonModal trigger="open-modal">
            <IonContent>
              <IonDatetime></IonDatetime>
            </IonContent>
          </IonModal>

          {/* Datetime in popover with cover element */}
          <IonItem button={true} id="open-date-input">
            <IonLabel>Date</IonLabel>
            <IonText slot="end">{popoverDate}</IonText>
            <IonPopover trigger="open-date-input" showBackdrop={false}>
              <IonDatetime
                presentation="date"
                onIonChange={(ev) => {
                  setPopoverDate(formatDate(ev.detail.value!));
                  // console.log(ev.detail.value!)
                  setFormattedDate(ev.detail.value!.slice(0, -15));
                }}
              />
            </IonPopover>
          </IonItem>

          {things.map((event) => {
            return (
              <ScheduleComp
                name={event.name}
                timeStart={event.timeStart}
                timeEnd={event.timeEnd}
                thelocation={event.location}
                url={event.url}
              />
            );
          })}
          {checkSched(things)}
          <IonButton onClick={openSite}>See Extended Events Calendar</IonButton>
          <p></p>
        </IonCard>
      ),
    },
    [AllModules.FestivalFood]: { label: "Festival Food", src: <FestivalFood /> },
    [AllModules.SkyData]: {
      label: "Sky Data",
      src: (
        <IonCard>
          <SkyData />
        </IonCard>
      ),
    },
    [AllModules.RoadConditions]: { label: "Road Conditions", src: <RoadConditions /> },
    [AllModules.WinterMountainData]: {
      label: "Winter Mountain Data",
      src: (
        <MountainData
          BaseDepth={MDBaseDepth || String(localStorage.getItem("MDBaseDepth"))}
          OneDaySnowfall={MDOneDay || String(localStorage.getItem("MDOneDaySnowfall"))}
          LiftsOpen={MDLiftsOpen || String(localStorage.getItem("MDLiftsOpen"))}
          TrailsOpen={MDTrailsOpen || String(localStorage.getItem("MDTrailsOpen"))}
        />
      ),
    },
    [AllModules.SnowPack]: {
      label: "Snow Pack",
      src: (
        <IonCard>
          <h1 className="centered">
            <br />
            Brian Head Snowpack
            <br />
          </h1>
          <SnowPack
            theDates={JSON.parse(String(localStorage.getItem("dates")))}
            baseDepth={JSON.parse(String(localStorage.getItem("baseDepth")))}
            oneDaySnowfall={JSON.parse(String(localStorage.getItem("oneDaySnowfall")))}
            temps={JSON.parse(String(localStorage.getItem("temps")))}
          />
        </IonCard>
      ),
    },
  };

  return (
    <IonPage id="home-page">
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
            <IonButton onClick={() => setShowFilterModal(true)} slot="end" fill="clear">
              <IonIcon icon={settingsOutline} slot="icon-only" />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {selectedHomeModules.map((moduleId: AllModules) => {
          return <Fragment key={moduleId}>{HomeModules[moduleId].src}</Fragment>;
        })}
      </IonContent>

      <IonModal isOpen={showFilterModal} swipeToClose={true} onDidDismiss={() => setShowFilterModal(false)}>
        <IonHeader translucent={true} className="module-filter">
          <IonToolbar>
            <IonTitle>Custom Modules</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="module-filter">
          <IonList lines={ios ? "inset" : "full"}>
            {Object.values(HomeModules).map((module, index) => (
              <IonItem key={`module-${index}`}>
                <IonLabel>{module.label}</IonLabel>
                <IonCheckbox
                  onClick={() => toggleModule(index)}
                  checked={selectedHomeModules.includes(index)}
                  color="primary"
                  value={index}
                ></IonCheckbox>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};
// export default Home;

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    selectedHomeModules: state.user.selectedHomeModules,
  }),
  mapDispatchToProps: {
    updateSelectedHomeModules,
  },
  component: Home,
});
