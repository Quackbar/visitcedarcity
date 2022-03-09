import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

import { BarChart, chartDataType, datasetType } from "../components/Chart";
import { updateSubscriptions } from "../data/actions";
import { connect } from "../data/connect";
import { SubscriptionItem } from "../models/defaultModels";

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <BarChart
          propOptions={chartOptions}
          propData={chartData}
          propHeight={300}
        />
        {Object.values(allSubscriptions).map((subscription, index) => (
          <IonItem key={index}>
            <IonCheckbox
              class={"c" + subscription.color.slice(1)}
              onClick={() => didToggleCheckbox(index)}
              checked={subscription.subscribed}
            >
              {subscription.title}
            </IonCheckbox>
            <IonText>&nbsp;{subscription.title}</IonText>
          </IonItem>
        ))}
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