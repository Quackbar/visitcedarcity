import React, { Fragment, ReactElement, useContext, useRef, useState } from "react";
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
  IonHeader,
  IonToolbar,
  IonIcon,
  IonCardContent,
} from "@ionic/react";
import { settingsOutline } from "ionicons/icons";

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
import { FMFSchedule } from "../assets/data/FMF";
import { UTWFSchedule } from "../assets/data/UTWF";
import { SUMASchedule } from "../assets/data/SUMA";
import { CCSchedule } from "../assets/data/CC";
import { SUUSSchedule } from "../assets/data/SUUS";
import { SUUPSchedule } from "../assets/data/SUUP";
import { BHSchedule } from "../assets/data/BH";
import { USFSchedule } from "../assets/data/USF";
import { UMRFSchedule } from "../assets/data/UMRF";
import { CCMASchedule } from "../assets/data/CCMA";
import { NSFSchedule } from "../assets/data/NSF";
import { OSUSchedule } from "../assets/data/OSU";
import { connect } from "../data/context/connect";
import { AppContext } from "../data/context/AppContext";
import HomeModulesFilter from "../components/HomeModulesFilter";

type subtype = {
  date: string;
  groups: {
    time: string;
    sessions: {
      name: string;
      url: string;
      timeStart: string;
      timeEnd: string;
      location: string;
      tracks: string[];
      id: string;
    }[];
  }[];
};

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
        thelocation="Check your subscriptions on the Account page"
        url="https://visitcedarcity.com/"
      />
    );
  }
}  


interface StateProps {
  selectedHomeModules: AllModules[];
}

type HomeProps = {} & StateProps & {};

const Home: React.FC<HomeProps> = ({ selectedHomeModules }) => {
  const formatDate = (value: string) => {
    return format(parseISO(value), "MMM dd yyyy");
  };
  const refresherRef = useRef<HTMLIonRefresherElement>(null);


  const doRefresh = () => {
    // TODO: refresh data
    window.location.reload();
    refresherRef.current!.complete();
  };
  let things: TodaysType[] = [];
  things = [];
  const today = new Date();
  let preformat = today.toLocaleDateString("en-US", { timeZone: "America/Denver" }).split("/");

  function pad(d: number) {
    return d < 10 ? "0" + d.toString() : d.toString();
  }

  const context = useContext(AppContext);

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [popoverDate, setPopoverDate] = useState(today.toDateString());
  const [formattedDate, setFormattedDate] = useState(
    preformat[2] + "-" + pad(Number(preformat[0])) + "-" + pad(Number(preformat[1]))
  );

  let CBAlerts: { schedule: subtype[] } = { schedule: [] };

  let schedule = localStorage.getItem("CBAlertUpdate")?.slice(0, -1) + "]}" || '{"schedule": []}';

  try {
    CBAlerts = JSON.parse(schedule);
  } catch (err) {
    console.log(err);
  }

  const pageRef = useRef<HTMLElement>(null);

  let yourSchedule: subtype[] = [];
  yourSchedule = USFSchedule.schedule;
  yourSchedule = yourSchedule.filter(function (item) {
    return USFSchedule.schedule.indexOf(item) < 0;
  });

  context.state.user.selectedSubscriptions.includes(0)
    ? (yourSchedule = yourSchedule.concat(USFSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return USFSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(1)
    ? (yourSchedule = yourSchedule.concat(NSFSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return NSFSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(2) || context.state.user.selectedSubscriptions.includes(3)
    ? (yourSchedule = yourSchedule.concat(BHSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return BHSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(5)
    ? (yourSchedule = yourSchedule.concat(SUMASchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return SUMASchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(6)
    ? (yourSchedule = yourSchedule.concat(SUUPSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return SUUPSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(7)
    ? (yourSchedule = yourSchedule.concat(OSUSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return OSUSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(8)
    ? (yourSchedule = yourSchedule.concat(CCMASchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return CCMASchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(15)
    ? (yourSchedule = yourSchedule.concat(SUUSSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return SUUSSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(16)
    ? (yourSchedule = yourSchedule.concat(CCSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return CCSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(13)
    ? (yourSchedule = yourSchedule.concat(UMRFSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return UMRFSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(14)
    ? (yourSchedule = yourSchedule.concat(UTWFSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return UTWFSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(12)
    ? (yourSchedule = yourSchedule.concat(FMFSchedule.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return FMFSchedule.schedule.indexOf(item) < 0;
      }));
  context.state.user.selectedSubscriptions.includes(11)
    ? (yourSchedule = yourSchedule.concat(CBAlerts.schedule))
    : (yourSchedule = yourSchedule.filter(function (item) {
        return CBAlerts.schedule.indexOf(item) < 0;
      }));

  function getTodays(rn: string) {
    let temp: any[] = [];
    yourSchedule.forEach((item) => {
      if (item.date === rn) {
        temp.push(
          item.groups.map((group) => {
            return group.sessions[0] as TodaysType;
          })
        );
      }
    });
    let returnable: TodaysType[] = [];
    temp.map((el) => {
      el.map((element: TodaysType) => {
        returnable.push(element);
      });
    });
    things = returnable;
    return returnable;
  }

  getTodays(formattedDate);

  let toggles = JSON.parse(localStorage.getItem("Toggles") || "[true,true,true,true,true,true,true]");

  const HomeModules: { [key in AllModules]: { label: string; src: ReactElement } } = {
    [AllModules.Weather]: {
      label: "Weather",
      src: !toggles[0] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Weather
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
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
      src: !toggles[1] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Schedule
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
        <IonCard class="basiccentered">
          <IonItem button={true} id="open-date-input-home">
            <IonLabel>Date</IonLabel>
            <IonText slot="end">{popoverDate}</IonText>
            <IonPopover alignment="end" side="top" trigger="open-date-input-home" showBackdrop={true}>
              <IonDatetime
                presentation="date"
                onIonChange={(ev) => {
                  setPopoverDate(formatDate(ev.detail.value!));
                  setFormattedDate(ev.detail.value!.slice(0, -15));
                  getTodays(formattedDate);
                }}
              />
            </IonPopover>
          </IonItem>

          {things.map((event, index) => {
            let yourDate = new Date(formattedDate)
            
            const filters = localStorage.getItem("ScheduleFilters")
            if(!(filters?.includes(yourDate.toISOString().split('T')[0]+" • "+event.name))){
            return (
              <ScheduleComp
                key={index}
                name={event.name}
                timeStart={event.timeStart}
                timeEnd={event.timeEnd}
                thelocation={event.location}
                url={event.url}
              />
            );
            }
          })}
          {checkSched(things)}
          <IonButton onClick={openSite}>See Extended Events Calendar</IonButton>
          <p></p>
        </IonCard>
      ),
    },
    [AllModules.FestivalFood]: {
      label: "Festival Food",
      src: !toggles[2] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Festival Food
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
        <FestivalFood />
      ),
    },
    [AllModules.SkyData]: {
      label: "Sky Data",
      src: !toggles[3] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Sky Data
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
        <IonCard key={AllModules.RoadConditions}>
          <SkyData />
        </IonCard>
      ),
    },
    [AllModules.RoadConditions]: {
      label: "Road Conditions",
      src: !toggles[4] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Road Conditions
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
        <RoadConditions />
      ),
    },
    [AllModules.WinterMountainData]: {
      label: "Mountain Data",
      src: !toggles[5] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Mountain Data
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
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
      src: !toggles[6] ? (
        <IonCard>
          <IonCardContent>
            <IonLabel class="centered">
              Snow Pack
              <br />
            </IonLabel>
            <IonLabel class="centered">Not Available during this season.</IonLabel>
          </IonCardContent>
        </IonCard>
      ) : (
        <IonCard>
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
    <IonPage ref={pageRef} id="home-page">
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
            <IonButton onClick={() => setShowFilterModal(true)} slot="end" fill="clear">
              <IonIcon icon={settingsOutline} slot="icon-only" />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" ref={refresherRef} onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        {console.log(selectedHomeModules)}
        {selectedHomeModules.length > 0 ? (
          selectedHomeModules.map((moduleId: AllModules, index) => {
            return <Fragment key={index}>{HomeModules[moduleId].src}</Fragment>;
          })
        ) : (
          <div className="no-module-selected-wrapper">
            <IonLabel className="no-module-selected-title">No modules selected.</IonLabel>
            <IonLabel className="no-module-selected-description">
              Get started by selecting and reordering your preffered modules from the settings.
            </IonLabel>
          </div>
        )}
      </IonContent>

      <IonModal
        isOpen={showFilterModal}
        onDidDismiss={() => setShowFilterModal(false)}
        swipeToClose={true}
        presentingElement={pageRef.current!}
      >
        <HomeModulesFilter homeModules={HomeModules} onDismissModal={() => setShowFilterModal(false)} />
      </IonModal>
    </IonPage>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    selectedHomeModules: state.user.selectedHomeModules,
  }),
  mapDispatchToProps: {
    updateSelectedHomeModules,
  },
  component: Home,
});
