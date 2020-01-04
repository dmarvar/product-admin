import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  legend: {
    labels: {
      fontColor: "white",
      fontSize: 12
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: "white",
          fontSize: 11,
          beginAtZero: true
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

let dataSet = (label, color, data) => {
  return {
    label,
    fill: false,
    lineTension: 0.2,
    backgroundColor: "rgba(255, 255, 255,1)",
    borderColor: color,
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: color,
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(255,255,255,1)",
    pointHoverBorderColor: color,
    pointHoverBorderWidth: 2,
    pointRadius: 2,
    pointHitRadius: 10,
    data
  };
};

export default function hits({ data }) {
  // Acomodar datos
  const dataToPlot = {
    labels: data.months,
    datasets: [
      dataSet("Featured", "rgba(66, 245, 242,1)", data.featured),
      dataSet("Popular", "rgba(245, 66, 236,1)", data.popular),
      dataSet("Latest", "rgba(32, 180, 32,1)", data.latest)
    ]
  };
  return <Line data={dataToPlot} options={options} />;
}
