"use client";
import StatsPanel from "./StatsPanel";
import { useState } from "react";
import GoalsSummaryPanel from "./GoalsSummaryPanel";
import LineChart from "./LineChart";
import RecentApps from "./RecentAppsPanel";
import ResourcesPanel from "./ResourcesPanel";
import ReminderPanel from "./ReminderPanel";
export default function DashboardContainer() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-col lg:flex-row gap-5 h-full max-h-full w-full">
      <div className="flex flex-col gap-5 lg:w-2/3 w-full">
        <div className="flex flex-col lg:h-1/2 gap-5">
          <StatsPanel></StatsPanel>
          <div className="flex flex-col lg:flex-row gap-5 w-full h-full">
            <LineChart></LineChart>
            <ResourcesPanel></ResourcesPanel>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <RecentApps></RecentApps>
          <ReminderPanel></ReminderPanel>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/3 w-full">
        <div className="flex flex-col lg:h-1/2 gap-5">
          <GoalsSummaryPanel></GoalsSummaryPanel>
        </div>
      </div>
    </div>
  );
}
