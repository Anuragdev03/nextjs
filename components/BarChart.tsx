import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

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

export default function BarChart(props: Proptype) {
  return (
    <>
      <Bar data={props.data} />
    </>
  );
}
