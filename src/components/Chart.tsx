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
  scales: {
    x: {
      stacked: true,
    },
    y: {
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const data2 = JSON.stringify(localStorage.getItem('data'))
export const data = {
  labels,
  datasets: datasets,
};

export default function Chart() {
  return <Bar options={options} data={data}
  height={300}
 />;
}
