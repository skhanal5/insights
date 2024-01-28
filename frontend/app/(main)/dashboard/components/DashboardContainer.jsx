"use client";
import StatsPanel from "./StatsPanel";
import { useState } from "react";
import GoalsPanel from "./GoalsPanel";
import LineChart from "./LineChart";
import RecentApps from "./RecentAppsPanel";
export default function DashboardContainer() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-row gap-5 h-full">
      <div className="flex flex-col gap-5 w-3/4 h-1/2">
        <StatsPanel></StatsPanel>
        <div className="flex flex-row gap-5">
          <LineChart></LineChart>
          <RecentApps></RecentApps>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/3 h-1/2">
        <GoalsPanel></GoalsPanel>
      </div>
    </div>
  );
}
