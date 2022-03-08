import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface optionsType {
  plugins: {
    legend: { position: "bottom" };
    title: { display: boolean; text: string };
  };
  responsive: boolean;
  scales: {
    x: { grid: { display: boolean }; stacked: boolean };
    y: { grid: { display: boolean }; stacked: boolean };
  };
}
interface datasetType {
  label: string | undefined;
  data: string[] | undefined;
  backgroundColor: string | undefined;
}
interface chartDataType {
  labels: string[];
  datasets: datasetType[];
}

const defaultData = {
  labels: [] as string[],
  datasets: [] as datasetType[],
};

const defaultBarOptions = {
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
  scales: {
    x: {
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      grid: {
        display: false,
      },
      stacked: true,
    },
  },
};

interface ChartProps {
  propOptions?: optionsType;
  propData?: chartDataType;
  propHeight?: number;
}

export const BarChart: React.FC<ChartProps> = ({
  propOptions,
  propData,
  propHeight,
}) => {
  const [data, setData] =
    useState<{ labels: string[]; datasets: datasetType[] }>(defaultData);
  const [options, setOptions] = useState(defaultBarOptions);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    if (propOptions) {
      setOptions(propOptions);
    }
  }, [propOptions]);

  useEffect(() => {
    if (propData) {
      setData(propData);
    }
  }, [propData]);

  useEffect(() => {
    if (propHeight) {
      setHeight(propHeight);
    }
  }, [propHeight]);

  return <Bar options={options} data={data} height={height} />;
};

// import React, { useState } from "react";
// import { Subscriptions } from "../models/defaultModels";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   plugins: {
//     legend: {
//       position: "bottom" as const,
//     },
//     title: {
//       display: true,
//       text: "2022",
//     },
//   },
//   responsive: true,
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//       stacked: true,
//     },
//     y: {
//       grid: {
//         display: false,
//       },
//       stacked: true,
//     },
//   },
// };
// var datasets: {
//   label: string | undefined;
//   data: string[] | undefined;
//   backgroundColor: string | undefined;
// }[] = [];

// const temp = Subscriptions.forEach((element) => {
//   var key = Object.keys(element)[0];
//   var values = Object.values(element)[0];
//   console.log(values?.color);
//   datasets.push({
//     label: values?.title,
//     data: values?.timing,
//     backgroundColor: values?.color,
//   });
// });

// const labels = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const data2 = JSON.stringify(localStorage.getItem("data"));
// export const theData = {
//   labels,
//   datasets: datasets,
// };

// export default function Chart() {
//   const [data, setData] = useState(theData);

//   const updatePlot = () => {
//     setData(theData);
//   };

//   return (
//     <Bar options={options} data={data} onPaste={updatePlot} height={300} />
//   );
// }
