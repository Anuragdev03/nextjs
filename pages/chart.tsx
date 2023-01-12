import { useState } from "react";
import Head from "next/head";
import Data from "./data";

// Charts

import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart"; 
import DoughnutChart from "../components/DoughnutChart";

// type
type Datatype = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: string[];
      backgroundColor?: string[];
    }
  ];
};

export default function Home() {
  const [userData, setUserData] = useState<Datatype>({
    labels: Data.map((user: any) => user.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((user: unknown) => user?.userGain),
        backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"]
      },
    ],
  });
  return (
    <>
      <div className="charts">
        <div style={{ height: 400, width: "100%"}}>
          <BarChart data={userData} />
        </div>

        <div style={{ height: 400, width: "100%"}}>
          <PieChart data={userData} />
        </div>

        <div style={{ height: 400, width: "100%"}}>
          <DoughnutChart data={userData} />
        </div>
      </div>
    </>
  );
}
