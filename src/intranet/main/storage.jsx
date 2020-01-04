import React from "react";
import { Doughnut } from "react-chartjs-2";

const optionsDoughnut = {
  legend: {
    labels: {
      fontColor: "white",
      fontSize: 14
    }
  }
};

export default function storage({ data }) {
  const dataToPlot = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: Object.keys(data)
      }
    ]
  };

  return <Doughnut data={dataToPlot} options={optionsDoughnut} />;
}
