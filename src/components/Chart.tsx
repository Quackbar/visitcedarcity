import React from 'react';
import {Subscriptions} from '../models/defaultModels'

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
import {Subscriptions} from '../models/defaultModels'

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

export default function App() {
  return <Bar options={options} data={theData}
  height={300}
 />;
}
