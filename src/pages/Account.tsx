import { IonContent,IonText, IonHeader,IonList,IonListHeader,IonItem,IonCheckbox, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useRef } from 'react';

import Chart from '../components/Chart';

import {Subscriptions} from '../models/defaultModels'
// import { theData } from "../components/Chart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: "2022",
    },
  },
  responsive: true,
  barThickness: 'flex',
  scales: {
  
    x: {
      

      grid: {
        display: false
      },
      stacked: true,
    },
    y: {
      display: false,

      grid: {
        display: false
      },
      stacked: true,
    },
  },
};



const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var datasets: { label: string | undefined; data: string[] | undefined; backgroundColor: string | undefined; }[] = [];
const temp = Subscriptions.forEach(element => {
  var key = Object.keys(element)[0]
  var values = Object.values(element)[0]
  console.log(values?.color)
  datasets.push({
    label: values?.title,
    data: values?.timing,
    backgroundColor: values?.color,
  })
});

export let theData = {
  labels,
  datasets: datasets,
};



interface ChartData {
  label: string;
  data: string[];
  backgroundColor: string;
}

interface ChartProps{
  labels: string[];
  datasets: ChartData[];
}



const Account: React.FC = () => {
  const [data, setData] = useState(theData);

  const updatePlot = () => {
    setData(theData);
  };
  const chartRef = useRef();

  function updateIt(){
    return (  <Bar redraw ref={chartRef} options={options} data={data} height={300} /> 
      )
  }
    return (
        <IonPage id="account-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
        <IonTitle class="centered">
          <br/>EVENT SPREAD BY YEAR
        </IonTitle>
        {
           
        



        } 
        {updateIt()}
       {/* <App/> */}
        <IonList>
          <IonListHeader>
            Subscriptions 
          </IonListHeader>
          {Subscriptions.map(Subscription => {
              var key = Object.keys(Subscription)[0]
              var values = Object.values(Subscription)[0]
              var title = values?.title || "";
              function getKey(val:string) {

                if(theData.datasets.map(e => e.label).indexOf(val)>=0){
                  theData.datasets.splice(theData.datasets.map(e => e.label).indexOf(val), 1)
                  console.log(theData.datasets)
                  console.log(theData.datasets.map(e => e.label).indexOf(val));
                }
                else{
                  const temp = Subscriptions.forEach(element => {
                    var key = Object.keys(element)[0]
                    var values = Object.values(element)[0]
                    // console.log(values?.color)
                    if(val === values?.title){
                      theData.datasets.push({
                        label: values?.title,
                        data: values?.timing,
                        backgroundColor: values?.color,
                      })
                    }
                  });

                }
                return val;


              }
            return(
              <IonItem >
              <IonCheckbox class={"c" + values?.color.slice(1)} onClick={updateIt} onIonChange={() => getKey(title)}>
              {values?.title}
              </IonCheckbox>
              <IonText >
              &nbsp;{values?.title}
              </IonText>
            </IonItem>
            );
          })}
        </IonList>

      </IonContent>
        </IonPage>
    )
}
export default Account;