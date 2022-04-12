import React, { useEffect, useState } from "react";
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
} from "@ionic/react";

import { BarChart, chartDataType, datasetType } from "../components/Chart";
import { setDarkTheme, updateSelectedSubscriptions } from "../data/context/actions";
import { connect } from "../data/context/connect";
import { SubscriptionItem } from "../models/defaultModels";

import { informationCircle, logoFacebook } from "ionicons/icons";
import { Browser } from "@capacitor/browser";
import { Toast } from "@capacitor/toast";
import { PushNotifications, Token } from "@capacitor/push-notifications";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import { getMode } from "@ionic/core";

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

const Account: React.FC<AccountProps> = ({
  darkTheme,
  allSubscriptions,
  selectedSubscriptions,
  updateSelectedSubscriptions,
  setDarkTheme,
}) => {
  const [chartData, setChartData] = useState<chartDataType>();
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
        <h3 className="centered ion-padding-top">Event Spread</h3>
        <BarChart propOptions={chartOptions} propData={chartData} propHeight={300} />
        <h3 className="ion-padding">Subscriptions</h3>
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
                <IonCheckbox
                  class={"c" + subscription.color.slice(1)}
                  onClick={() => didToggleCheckbox(index)}
                  checked={selectedSubscriptions.includes(subscription.id)}
                />
                <IonLabel>{subscription.title}</IonLabel>
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
