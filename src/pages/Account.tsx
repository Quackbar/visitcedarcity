import {
  IonCheckbox,
  IonContent,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonIcon,
  IonButton,
  IonHeader,
  IonToolbar,
  IonPopover,
  IonActionSheet,
} from "@ionic/react";
import React, { Fragment, useEffect, useState } from "react";

import { BarChart, chartDataType, datasetType } from "../components/Chart";
import { updateSelectedSubscriptions } from "../data/context/actions";
import { connect } from "../data/context/connect";
import { SubscriptionItem } from "../models/defaultModels";

import { informationCircle, logoFacebook } from "ionicons/icons";
import { Browser } from "@capacitor/browser";
import { Toast } from "@capacitor/toast";
import {  PushNotifications, Token } from "@capacitor/push-notifications";
// import './Home.css';
import SafeAreaWrapper from "../components/SafeAreaWrapper";

const chartOptions = {
  plugins: {
    legend: {
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
  allSubscriptions: SubscriptionItem[];
  selectedSubscriptions: number[];
}
interface DispatchProps {
  updateSelectedSubscriptions: typeof updateSelectedSubscriptions;
}

type AccountProps = StateProps & DispatchProps;

const Account: React.FC<AccountProps> = ({ allSubscriptions, selectedSubscriptions, updateSelectedSubscriptions }) => {
  const nullEntry: any[] = [];
  // const [notifications, setnotifications] = useState(nullEntry);

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
  }, []);

  const register = () => {
    //console.log("Initializing HomePage");

    // Register with Apple / Google to receive push via APNS/FCM
    // PushNotifications.register();

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
        text: msg
    })
  };
  //

  const [chartData, setChartData] = useState<chartDataType>();

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

  const didToggleCheckbox = (index: number) => {
    // flip the subscription state
    if (selectedSubscriptions.includes(index)) {
      selectedSubscriptions.splice(selectedSubscriptions.indexOf(index), 1);
    } else {
      selectedSubscriptions.push(index);
    }

    updateSelectedSubscriptions([...selectedSubscriptions]);
  };
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <IonPage id="account-page" onLoad={register}>
      <IonContent>
        <SafeAreaWrapper>
          <h1 className="centered">
            <br />
            Event Spread
          </h1>
          <BarChart propOptions={chartOptions} propData={chartData} propHeight={300} />
          <h1>
            <br />
            &nbsp;&nbsp;Subscriptions
          </h1>
          {Object.values(allSubscriptions).map((subscription, index) => {
            const openSite = async () => {
              await Browser.open({ url: subscription.url });
            };
            const openFacebook = async () => {
              await Browser.open({ url: subscription.furl });
            };
            return (
              <IonItem>
              <Fragment key={index}>
                <IonItem class="ninety">
                  <IonCheckbox
                    class={"c" + subscription.color.slice(1)}
                    onClick={() => didToggleCheckbox(index)}
                    checked={selectedSubscriptions.includes(subscription.id)}
                  >
                    {subscription.title}
                  </IonCheckbox>
                  <IonText>&nbsp;{subscription.title}</IonText>
                </IonItem>

                <IonIcon
                  icon={informationCircle}
                  onClick={openSite}
                  class="ion-text-right ten"
                  color="primary"
                />
                <IonIcon icon={logoFacebook} onClick={openFacebook} class="ion-text-right ten" color="primary" />
              </Fragment>
              </IonItem>
            );
          })}
          <h1>

            &nbsp;&nbsp;Account Settings
          </h1>
          {/* <IonItem>
            <IonButton>Sign In</IonButton>
          </IonItem>
          <IonItem>
            <IonButton>Create Account</IonButton>
          </IonItem> */}
          <IonItem>
          <IonItem>
            <IonButton href="/tutorial">See Tutorial</IonButton>
            </IonItem></IonItem>
          <IonItem><IonItem>
            <IonButton onClick={() => setShowFilterModal(true)}>Get Help</IonButton>
            </IonItem></IonItem>
          <IonPopover
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
          >
            <p>This is popover content</p>
          </IonPopover>
          <IonActionSheet
        isOpen={showFilterModal}
        onDidDismiss={() => setShowFilterModal(false)}
        cssClass="my-custom-class"
        buttons={[
          {
            text: "Technical Question / Suggestion",
            handler: () => {
              Browser.open({ url: "mailto:info@goldblockchain.us" });
            },
          },
          {
            text: "Visit Cedar City / Brian Head Question",
            handler: () => {
              Browser.open({ url: "mailto:tourism.group@ironcounty.net" });
            },
          },
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              //console.log("Cancel clicked");
            },
          },
        ]}
      >
      </IonActionSheet>
        </SafeAreaWrapper>
      </IonContent>
    </IonPage>
  );
};

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    allSubscriptions: state.subscriptionItems,
    selectedSubscriptions: state.user.selectedSubscriptions,
  }),
  mapDispatchToProps: {
    updateSelectedSubscriptions,
  },
  component: Account,
});
