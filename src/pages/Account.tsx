import React, { useContext, useEffect, useState } from "react";
import {
  IonCheckbox,
  IonContent,
  IonItem,
  IonPage,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonLabel,
  IonItemGroup,
  IonItemDivider,
  IonToggle,
  IonButton,
  IonRow,
  IonCol,
  IonGrid,
  IonModal,
  IonDatetime,
  IonPopover,
  IonText,
  IonCard,
  IonImg,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { BarChart, chartDataType, datasetType } from "../components/Chart";
import { setDarkTheme, updateSelectedSubscriptions } from "../data/context/actions";
import { TodaysType, SubscriptionItem } from "../models/defaultModels";
import { AppContext } from "../data/context/AppContext";

import { informationCircle, logoFacebook } from "ionicons/icons";
import { Browser } from "@capacitor/browser";
import { Toast } from "@capacitor/toast";
import { PushNotifications, Token } from "@capacitor/push-notifications";
import { getMode } from "@ionic/core";

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
import ScheduleComp from "../modules/Schedule";

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

const chartOptions = {
  plugins: {
    legend: {
      display: false,
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "2022",
    },
  },
  responsive: true,
  barThickness: "flex",
  scales: {
    x: {
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      display: false,

      grid: {
        display: false,
      },
      stacked: true,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface StateProps {
  darkTheme: boolean;
  allSubscriptions: SubscriptionItem[];
  selectedSubscriptions: number[];
}
interface DispatchProps {
  updateSelectedSubscriptions: typeof updateSelectedSubscriptions;
  setDarkTheme: typeof setDarkTheme;
}

type AccountProps = StateProps & DispatchProps;

const Account: React.FC<AccountProps> = ({ darkTheme, allSubscriptions, selectedSubscriptions, updateSelectedSubscriptions, setDarkTheme }) => {
  const context = useContext(AppContext);

  const [chartData, setChartData] = useState<chartDataType>();
  // const [popoverDate, setPopoverDate] = useState('');
  // const [popoverDate2, setPopoverDate2] = useState('');

  const openSite = async () => {
    await Browser.open({ url: "https://visitcedarcity.com/events/" });
  };

  let things: TodaysType[] = [];
  things = [];
  const today = new Date();
  const nextweek = new Date();
  nextweek.setDate(today.getDate() + 7);

  let preformat = today.toLocaleDateString("en-US", { timeZone: "America/Denver" }).split("/");
  let preformat2 = nextweek.toLocaleDateString("en-US", { timeZone: "America/Denver" }).split("/");

  function pad(d: number) {
    return d < 10 ? "0" + d.toString() : d.toString();
  }

  const [popoverDate, setPopoverDate] = useState(preformat[2] + "-" + pad(Number(preformat[0])) + "-" + pad(Number(preformat[1])));
  const [popoverDate2, setPopoverDate2] = useState(preformat2[2] + "-" + pad(Number(preformat2[0])) + "-" + pad(Number(preformat2[1])));

  function checkSched(things: TodaysType[]) {
    if (things.length === 0) {
      return (
        <ScheduleComp
          name="Sorry, No Events In This Range to Show Yet"
          timeStart=""
          timeEnd=""
          thelocation="Check your subscriptions for other interests to add"
          url="https://visitcedarcity.com/"
        />
      );
    }
  }

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

  function getRange(start: string, end: string) {
    let temp: any[] = [];
    yourSchedule.forEach((item) => {
      if (item.date >= start && item.date <= end) {
        temp.push(
          item.groups.map((group) => {
            if (!group.sessions[0].name.includes(" • ")) group.sessions[0].name = item.date + " • " + group.sessions[0].name;

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
    function compare(a: TodaysType, b: TodaysType) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    returnable.sort(compare);
    return returnable;
  }
  getRange(popoverDate, popoverDate2);

  const formatDate = (value: string) => {
    console.log(value);
    return value.split("T")[0];
  };
  const ios = getMode() === "ios";

  const register = () => {
    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      showToast("Push registration success");
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });
  };

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg,
    });
  };

  const didToggleCheckbox = (index: number) => {
    // flip the subscription state
    if (selectedSubscriptions.includes(index)) {
      selectedSubscriptions.splice(selectedSubscriptions.indexOf(index), 1);
    } else {
      selectedSubscriptions.push(index);
    }

    updateSelectedSubscriptions([...selectedSubscriptions]);
  };

  useEffect(() => {
    PushNotifications.checkPermissions().then((res) => {
      //console.log(res);
      if (res.receive !== "granted") {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === "denied") {
            showToast("Push Notification permission denied");
          } else {
            showToast("Push Notification permission granted");
            register();
          }
        });
      } else {
        register();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSite1 = async () => {
    await Browser.open({ url: "https://bwpbrianheadhotel.com/" });
  };
  const openSite2 = async () => {
    await Browser.open({ url: "http://bigyellowinn.com/" });
  };
  const openSite3 = async () => {
    await Browser.open({ url: "https://abbeyinncedar.com/" });
  };
  const openSite4 = async () => {
    await Browser.open({ url: "https://visitcedarcity.com/lodging/" });
  };

  useEffect(() => {
    let newChartDataSet: datasetType[] = [];

    allSubscriptions.forEach((subscription) => {
      if (selectedSubscriptions.includes(subscription.id)) {
        newChartDataSet.push({
          label: subscription.title,
          data: subscription.timing,
          backgroundColor: subscription.color,
        });
      }
    });

    setChartData({
      labels: labels,
      datasets: newChartDataSet,
    });
  }, [allSubscriptions, selectedSubscriptions]);

  return (
    <IonPage id="account-page" onLoad={register}>
      <IonContent fullscreen={true}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h3 className="centered ion-padding-top">Predicted Event Spread</h3>
        <BarChart propOptions={chartOptions} propData={chartData} propHeight={300} />
        <IonGrid class="centered">
          <IonRow>
            <IonCol>
              <IonButton id="trigger-button">Plan Your Trip</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <h3 className="ion-padding">Interests</h3>
        <IonList lines={ios ? "inset" : "full"}>
          {Object.values(allSubscriptions).map((subscription, index) => {
            const openSite = async () => {
              await Browser.open({ url: subscription.url });
            };
            const openFacebook = async () => {
              await Browser.open({ url: subscription.furl });
            };

            return (
              <IonItem key={index}>
                <IonItem class="ninety">
                  <IonCheckbox
                    class={"c" + subscription.color.slice(1)}
                    onClick={() => didToggleCheckbox(index)}
                    checked={selectedSubscriptions.includes(subscription.id)}
                  />
                  <IonLabel>&nbsp;{subscription.title}</IonLabel>
                </IonItem>

                <IonIcon icon={informationCircle} onClick={openSite} class="ion-text-right ten" color="primary" />
                <IonIcon icon={logoFacebook} onClick={openFacebook} class="ion-text-right ten" color="primary" />
              </IonItem>
            );
          })}
        </IonList>
        <h3 className="ion-padding-top ion-padding-start">Account</h3>
        <IonList lines={ios ? "inset" : "full"}>
          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Settings</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>App Theme</IonLabel>
              <IonToggle checked={darkTheme} color="dark" onIonChange={(e) => setDarkTheme(e.detail.checked)} />
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Help</IonLabel>
            </IonItemDivider>
            <IonItem href="/tutorial">
              <IonLabel>View Tutorial</IonLabel>
            </IonItem>
            <IonItem href="mailto:info@goldblockchain.us">
              <IonLabel>Get Technical Help</IonLabel>
            </IonItem>
            <IonItem href="mailto:tourism.group@ironcounty.net">
              <IonLabel>Get Cedar City Help</IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
      <IonModal trigger="trigger-button" breakpoints={[0, 1]} initialBreakpoint={1}>
        <IonGrid class="centered fit">
          <IonRow>
            <IonCol>
              <p>
                <br />
              </p>
              <IonTitle>Choose Dates to Explore</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem button={true} id="open-date-input">
                <IonLabel>Start Date</IonLabel>
                <IonText slot="end">{popoverDate}</IonText>
                <IonPopover size="cover" alignment="end" side="top" trigger="open-date-input" showBackdrop={false}>
                  <IonDatetime presentation="date" size="cover" onIonChange={(ev) => setPopoverDate(formatDate(ev.detail.value!))} />
                </IonPopover>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <br />
              <IonItem button={true} id="close-date-input">
                <IonLabel>End Date</IonLabel>
                <IonText slot="end">{popoverDate2}</IonText>
                <IonPopover size="cover" alignment="end" side="top" trigger="close-date-input" showBackdrop={false}>
                  <IonDatetime presentation="date" size="cover" onIonChange={(evl) => setPopoverDate2(formatDate(evl.detail.value!))} />
                </IonPopover>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                <br />
              </p>

              <IonTitle>Some Things Going On Then</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="scrollingcontainer">
                {things.map((event, index) => {
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
                })}
                {checkSched(things)}
                <IonButton onClick={openSite}>See Extended Events Calendar</IonButton>
              </div>
            </IonCol>
          </IonRow>
          <div className="scrollingcontaineralt">
            <IonRow>
              <IonCol>
                <IonCard onClick={openSite1}>
                  <IonImg src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Hotel-Exterior-Twilight_7F122E41-5056-A36F-239064A297FE3347-7f122cc45056a36_7f122e95-5056-a36f-2395e5169d8aec44.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>Best Western Premier Brian Head</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>$$$</IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard onClick={openSite3}>
                  <IonImg src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Abbey-Inn--King-Suite_D4A6B91C-5056-A36F-2322F5D269286ACC-d4a6b69f5056a36_d4a6b987-5056-a36f-23f0b979464418ad.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>
                      <br />
                      Abbey Inn & Suites
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>$$</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard onClick={openSite2}>
                  <IonImg src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_800,h_600/crm/ironcountyut/Big-Yellow-Inn-front_7F48E6D4-5056-A36F-234B3B3EAC689FE7-7f48e5675056a36_7f48e72c-5056-a36f-23bc0b86e81eba7d.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>
                      Big Yellow Inn
                      <br />
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>$$$</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonButton onClick={openSite4}>See Extended Lodging Options</IonButton>
            <h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </h1>
          </div>
        </IonGrid>
      </IonModal>
    </IonPage>
  );
};

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkTheme: state.user.darkTheme,
    allSubscriptions: state.subscriptionItems,
    selectedSubscriptions: state.user.selectedSubscriptions,
  }),
  mapDispatchToProps: {
    updateSelectedSubscriptions,
    setDarkTheme,
  },
  component: Account,
});
