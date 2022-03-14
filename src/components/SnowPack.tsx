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
import { Line } from "react-chartjs-2";

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
  responsive: false,
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
          label: "BaseDepth(in.)",
          data: baseDepth,
          borderColor: "rgba(10,150,255,.5)",
          backgroundColor: "rgba(10,150,255, 0.2)",
          tension: .3,
          pointRadius: .1,
          fill: true,
        },
        {
          label: "Temp(F)",
          data: temps,
          borderColor: "rgba(250,50,55,.5)",
          backgroundColor: "rgba(250,50,55, 0.2)",
          tension: .3,
          pointRadius: .1,

          fill: true,
        },
        {
          label: "24hrSnowfall(in.)",
          data: oneDaySnowfall,
          borderColor: "rgba(10,10,255,.2)",
          backgroundColor: "rgba(10,10,255, 0.1)",
          tension: .3,
          pointRadius: .1,
          fill: true,
        },
      ],
    };

    // return <Chart type='bar' data={data} />;

  return <Line options={options} data={data} height="400" className="centered"/>;
}
export default SnowPack;
