import {
  IonCheckbox,
  IonContent,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { useEffect, useState } from "react";

import { BarChart, chartDataType, datasetType } from "../components/Chart";
import { updateSubscriptions } from "../data/actions";
import { connect } from "../data/connect";
import { SubscriptionItem } from "../models/defaultModels";

import { informationCircle } from 'ionicons/icons';
import { Browser } from "@capacitor/browser";


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

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface StateProps {
  allSubscriptions: SubscriptionItem[];
}
interface DispatchProps {
  updateSubscriptions: typeof updateSubscriptions;
}

type AccountProps = StateProps & DispatchProps;

const Account: React.FC<AccountProps> = ({
  allSubscriptions,
  updateSubscriptions,
}) => {
  const [chartData, setChartData] = useState<chartDataType>();

  useEffect(() => {
    let newChartDataSet: datasetType[] = [];

    allSubscriptions.forEach((subscription) => {
      if (subscription.subscribed) {
        newChartDataSet.push({
          label: subscription.title,
          data: subscription.timing,
          backgroundColor: subscription.color,
        });
      }
    });

    setChartData({
      labels: labels,
      datasets: newChartDataSet
    })

  }, [allSubscriptions]);

  const didToggleCheckbox = (index: number) => {
    // flip the subscription state
    allSubscriptions[index].subscribed = !allSubscriptions[index].subscribed;
    updateSubscriptions([...allSubscriptions]);
  };

  return (
    <IonPage id="account-page">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
      <IonTitle class="centered"><br/>Event Spread</IonTitle>
        <BarChart
          propOptions={chartOptions}
          propData={chartData}
          propHeight={300}
        />
        <IonTitle>
          <br/>
          Subscriptions
        </IonTitle>
        {Object.values(allSubscriptions).map((subscription, index) => 
        
        {
          const openSite = async () => {
            await Browser.open({ url: subscription.url });
          };
        return (
          <>
          <IonItem key={index} class="ninety">
            <IonCheckbox
              class={"c" + subscription.color.slice(1)}
              onClick={() => didToggleCheckbox(index)}
              checked={subscription.subscribed}
            >
              {subscription.title}
            </IonCheckbox>
            <IonText>&nbsp;{subscription.title}</IonText>
            
          </IonItem>
          
          <IonIcon icon={informationCircle} onClick={openSite} class="ion-text-right ten" color="primary" />
          </>
        )})}
      </IonContent>
    </IonPage>
  );
};

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    allSubscriptions: state.subscriptionItems,
  }),
  mapDispatchToProps: {
    updateSubscriptions,
  },
  component: Account,
});