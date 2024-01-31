"use client"
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Pizza", "Popularity"],
  ["Pepperoni", 33],
  ["Hawaiian", 26],
  ["Mushroom", 22],
  ["Sausage", 10], 
  ["Anchovies", 9], 
];

export const options = {
  sliceVisibilityThreshold: 0.2,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
