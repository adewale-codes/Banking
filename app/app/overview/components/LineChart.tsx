"use client"
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Week", "Income", "Expenses"],
  ["Mo", 1000, 400],
  ["Tu", 1170, 460],
  ["We", 660, 1120],
  ["Th", 3200, 120],
  ["Fr", 1250, 2570],
  ["Sa", 550, 780],
  ["Su", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
