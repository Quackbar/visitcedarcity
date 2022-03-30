import React, { Fragment, ReactElement, useContext, useState } from "react";
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
  IonReorder,
  IonList,
  IonReorderGroup,
  IonItemGroup,
  IonItemDivider,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import { getMode, ItemReorderEventDetail, RefresherEventDetail } from "@ionic/core";
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
import { FMFSchedule } from "../assets/data/FMF"
import { UTWFSchedule } from "../assets/data/UTWF"
import { SUMASchedule } from "../assets/data/SUMA"
import { CCSchedule } from "../assets/data/CC"
import { SUUSSchedule } from "../assets/data/SUUS"
import { SUUPSchedule } from "../assets/data/SUUP"
import { BHSchedule } from "../assets/data/BH"
import { USFSchedule } from "../assets/data/USF";
import { UMRFSchedule } from "../assets/data/UMRF";
import { CCMASchedule } from "../assets/data/CCMA";
import { NSFSchedule } from "../assets/data/NSF";
import { OSUSchedule } from "../assets/data/OSU";
import { connect } from "../data/context/connect";
import { AppContext } from "../data/context/AppContext";



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

  const context = useContext(AppContext);

  //console.log(context.state.user.selectedSubscriptions)

  const [showFilterModal, setShowFilterModal] = useState(false);

  const today = new Date();
  const [popoverDate, setPopoverDate] = useState(today.toDateString());
  let things: TodaysType[] = [];
  things = [];
  const [formattedDate, setFormattedDate] = useState(new Date().toISOString().slice(0, 10));

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
    }[]
}

let yourSchedule: subtype[] = []
//   let subs = localStorage.getItem("subs")
//   console.log(subs);
yourSchedule = USFSchedule.schedule
yourSchedule = yourSchedule.filter(function(item) { 
    return USFSchedule.schedule.indexOf(item) < 0; 
});


    context.state.user.selectedSubscriptions.includes(0) ? 
    yourSchedule = yourSchedule.concat(USFSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return USFSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(1) ? 
    yourSchedule = yourSchedule.concat(NSFSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return NSFSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(2)||context.state.user.selectedSubscriptions.includes(3) ? 
    yourSchedule = yourSchedule.concat(BHSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return BHSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(5) ? 
    yourSchedule = yourSchedule.concat(SUMASchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return SUMASchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(6) ? 
    yourSchedule = yourSchedule.concat(SUUPSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return SUUPSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(7) ? 
    yourSchedule = yourSchedule.concat(OSUSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return OSUSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(8) ? 
    yourSchedule = yourSchedule.concat(CCMASchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return CCMASchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(15) ? 
    yourSchedule = yourSchedule.concat(SUUSSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return SUUSSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(16) ? 
    yourSchedule = yourSchedule.concat(CCSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return CCSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(13) ? 
    yourSchedule = yourSchedule.concat(UMRFSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return UMRFSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(14) ? 
    yourSchedule = yourSchedule.concat(UTWFSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return UTWFSchedule.schedule.indexOf(item) < 0; 
    });
    context.state.user.selectedSubscriptions.includes(12) ? 
    yourSchedule = yourSchedule.concat(FMFSchedule.schedule)
        :
    yourSchedule = yourSchedule.filter(function(item) { 
        return FMFSchedule.schedule.indexOf(item) < 0; 
    });

  function getTodays(rn: string){
    let temp: any[] = []
    yourSchedule.map((item) => {
        // console.log("doing stuff")
      if (item.date === rn) {
        temp.push(item.groups.map((group) => {
          return group.sessions[0] as TodaysType;
        }))
      }
    });
    // console.log(temp)
    let returnable: TodaysType[] = [];
    temp.map(el => {
        el.map((element: TodaysType) => {
            returnable.push(element)
        });
    })
    // console.log(returnable)
    things = returnable
    return returnable;
  }
// setFormattedDate(new Date().toISOString().slice(0, 10))
//   yourSchedule.map((item) => {
//       console.log("doing stuff")
//     if (item.date === formattedDate) {
//       things = item.groups.map((group) => {
//         return group.sessions[0] as TodaysType;
//       })
//     }
//   });

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // reorder array
    selectedHomeModules.splice(event.detail.to, 0, selectedHomeModules.splice(event.detail.from, 1)[0]);
    event.detail.complete();
  }

  const toggleModule = (index: number) => {
    // flip the subscription state
    if (selectedHomeModules.includes(index)) {
      selectedHomeModules.splice(selectedHomeModules.indexOf(index), 1);
    } else {
      selectedHomeModules.push(index);
    }
    updateSelectedHomeModules([...selectedHomeModules]);
  };
  getTodays(formattedDate)

  const HomeModules: { [key in AllModules]: { label: string; src: ReactElement } } = {
    // const [things, setThings] = useState([]);
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
            {/* <br />
            <h3>
            Going On Today In Cedar City
            </h3>
            <br />
            <br /> */}
          </IonTitle>

          {/* Datetime in popover with cover element */}
          <IonItem button={true} id="open-date-input">
            <IonLabel>Date</IonLabel>
            <IonText slot="end">{popoverDate}</IonText>
            <IonPopover alignment="end" side="top" trigger="open-date-input" showBackdrop={true}>
              <IonDatetime
                presentation="date"
                onIonChange={(ev) => {
                  setPopoverDate(formatDate(ev.detail.value!));
                  // console.log(ev.detail.value!)
                  setFormattedDate(ev.detail.value!.slice(0, -15));
                  getTodays(formattedDate)
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
            <IonItemGroup>
              <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
                {selectedHomeModules.map((moduleId: AllModules, index) => (
                  <IonItemSliding key={`subbed_mod-${index}`}>
                    <IonItem>
                      <IonLabel>{HomeModules[moduleId].label}</IonLabel>
                      <IonReorder />
                    </IonItem>
                    <IonItemOptions side="end">
                      <IonItemOption
                        color="danger"
                        onClick={() => {
                          toggleModule(moduleId);
                        }}
                      >
                        Remove
                      </IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
                ))}
              </IonReorderGroup>
            </IonItemGroup>
            <IonItemGroup>
              <IonItemDivider sticky>
                <IonLabel>Add new modules</IonLabel>
              </IonItemDivider>
              {Object.values(HomeModules).map(
                (module, index) =>
                  !selectedHomeModules.includes(index) && (
                    <IonItem key={`unsubbed_mod-${index}`} onClick={() => toggleModule(index)}>
                      <IonLabel>{module.label}</IonLabel>
                    </IonItem>
                  )
              )}
            </IonItemGroup>
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
