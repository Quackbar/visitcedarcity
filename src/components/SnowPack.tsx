import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {getSnowData} from "../assets/firebase/Firebase"
import { IonText } from "@ionic/react";

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
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Brian Head Snow Data",
    },
  },
};

getSnowData().then((data) => {
  const labels = data.Date;
})

type MyReturnTypeItem = {
  Date?: Date;
  BaseDepth?: string;
};

const mountainData: any = localStorage.getItem("MountainData");

let dates = new Array();
let snowData = new Array();


// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Base Depth",
//       data: snowData,
//       borderColor: "rgba(10,150,255,.5)",
//       backgroundColor: "rgba(10,150,255, 0.2)",
//     },
//   ],
// };

interface WeatherProps {
  theDates: string[];
  baseDepth: string[];
  oneDaySnowfall: string[];
  temps: string[];
}
const SnowPack: React.FC<WeatherProps> = ({ theDates,
  baseDepth,
  oneDaySnowfall,
  temps}) => {

    const labels = theDates;
    const data = {
      labels,
      datasets: [
        {
          type: 'line' as const,
          label: "BaseDepth(in.)",
          data: baseDepth,
          borderColor: "rgba(10,150,255,.5)",
          backgroundColor: "rgba(10,150,255, 0.2)",
          tension: .3,
          pointRadius: .1,
          fill: true,
        },
        {
          type: 'line' as const,
          label: "Temp(F)",
          data: temps,
          borderColor: "rgba(250,50,55,.5)",
          backgroundColor: "rgba(250,50,55, 0.2)",
          tension: .3,
          pointRadius: .1,

          fill: true,
        },
        {
          type: 'bar' as const,
          label: "24hrSnowfall(in.)",
          data: oneDaySnowfall,
          borderColor: "rgba(10,10,255,.5)",
          backgroundColor: "rgba(10,10,255, 0.2)",
        },
      ],
    };

    return <Chart type='bar' data={data} />;

  // return <Line options={options} data={data} />;
}
export default SnowPack;
