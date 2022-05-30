import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import React from "react";

function Barchart(props) {
  return (
    <div>
      <Bar
        data={props.data}
        options={{ plugins: { legend: { display: false } } }}
      />
    </div>
  );
}

export default Barchart;
