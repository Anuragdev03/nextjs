import { Chart, registerables } from "chart.js";
import {  Doughnut } from "react-chartjs-2";

Chart.register(...registerables);


type Proptype = {
  data: {
    labels: string[],
    datasets: [{
        label: string;
        data: string[];
    }]
  }
};

export default function DoughnutChart(props: Proptype) {
  return (
    <>
      <Doughnut data={props.data} options={{ responsive: true, maintainAspectRatio: true, plugins: {legend: { display: false}}}} />
    </>
  );
}
