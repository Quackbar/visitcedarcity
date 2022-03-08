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
export interface datasetType {
  label: string | undefined;
  data: string[] | undefined;
  backgroundColor: string | undefined;
}
export interface chartDataType {
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
