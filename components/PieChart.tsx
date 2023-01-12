import { Chart, registerables } from "chart.js";
import {  Pie } from "react-chartjs-2";

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

export default function PieChart(props: Proptype) {
  return (
    <>
      <Pie data={props.data} options={{ responsive: true, maintainAspectRatio: true, plugins: {legend: { display: false}}}} />
    </>
  );
}
