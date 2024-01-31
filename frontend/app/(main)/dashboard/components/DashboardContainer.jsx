"use client";
import StatsPanel from "./StatsPanel";
import { useState } from "react";
import GoalsPanel from "./GoalsPanel";
import LineChart from "./LineChart";
import RecentApps from "./RecentAppsPanel";
import ResourcesPanel from "./ResourcesPanel";
export default function DashboardContainer() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-row gap-5 h-full max-h-full w-full">
      <div className="flex flex-col gap-5 w-2/3">
        <div className="flex flex-col h-1/2 gap-5">
          <StatsPanel></StatsPanel>
          <div className="flex flex-row gap-5 w-full h-full">
            <LineChart></LineChart>
            <ResourcesPanel></ResourcesPanel>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <RecentApps></RecentApps>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/3">
        <div className="flex flex-col h-1/2 gap-5">
          <GoalsPanel></GoalsPanel>
        </div>
      </div>
    </div>
  );
}
