import React from "react";
import { Chart } from "react-google-charts";


function MyChart(){
	const data = [
		["Technology", "Confidence Level"],
		["ASP Architecture", 80],
		["C#", 95],
		["Javascript", 91],
		["React.js", 79],
		["Vue.js", 76],
		["SQL", 78],
		["Bootstrap", 85],
		["GIT/SVN Tech", 91]
	];

	const options = {
		title: "Confidence in Technology",
		chartArea: { width: "50%" },
		hAxis: {
		  title: "Technology",
		  minValue: 0,
		},
		vAxis: {
		  title: "Confidence",
		},
	};

	return(
		<Chart
		chartType="ColumnChart"
		width="100%"
		height="400px"
		data={data}
		options={options}
	  />

	);
};

export default MyChart;



export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};