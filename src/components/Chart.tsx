import React from 'react';
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const data2 = JSON.stringify(localStorage.getItem('data'))
export const data = {
  labels,
  datasets: [
    {
      label: data2,
      data: ['10','10','10','10','10','10','10','10'],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Red Rock Film',
      data: ['20','20','20','20','20','20','20'],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: ['12','0','2','5','3','1','0',],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data}
  height={300}
 />;
}
