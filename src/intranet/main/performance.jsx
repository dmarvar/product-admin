import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
    labels: {
      fontColor: "white",
      fontSize: 18
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: "white",
          fontSize: 11
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "white",
          fontSize: 11,
          beginAtZero: true
        }
      }
    ]
  }
};

export default function performance({ data }) {
  let dataToPlot = {
    labels: Object.keys(data),
    datasets: [
      {
        backgroundColor: Object.keys(data),
        borderWidth: 1,
        hoverBackgroundColor: Object.keys(data),
        hoverBorderColor: "gray",
        data: Object.values(data)
      }
    ]
  };

  return <HorizontalBar data={dataToPlot} options={options} />;
}
