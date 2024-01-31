"use client"
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Days", "Balance"],
  ["1-10", 1000],
  ["11-20", 1170],
  ["21-25", 660],
  ["26-31", 1030],
];

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
};

export function App() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
}
