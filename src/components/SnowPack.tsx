import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Brian Head Snow Data',
    },
  },
};

type MyReturnTypeItem = {
    Date?: Date;
    BaseDepth?: string;
  }

const mountainData: any = localStorage.getItem("MountainData")


let dates = new Array
let snowData = new Array

// mountainData.forEach((element: { Date: any; BaseDepth: any; }) => {
//     dates.push(element.Date)
//     snowData.push(element.BaseDepth)
// });

const labels = dates;

export const data = {
  labels,
  datasets: [
    {
      label: "Base Depth",
      data: snowData,
      borderColor: 'rgba(10,150,255,.5)',
      backgroundColor: 'rgba(10,150,255, 0.2)',
    }
  ],
};

export default function Snowpack() {
  return <Line options={options} data={data} />;
}
