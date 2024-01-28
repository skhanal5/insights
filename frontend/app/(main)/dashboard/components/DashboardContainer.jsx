"use client";
import StatsPanel from "./StatsPanel";
import { useState } from "react";
import GoalsPanel from "./GoalsPanel";
import LineChart from "./LineChart";
export default function DashboardContainer() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-col gap-5">
      <StatsPanel></StatsPanel>
      <LineChart></LineChart>
      <GoalsPanel></GoalsPanel>
    </div>
  );
}
