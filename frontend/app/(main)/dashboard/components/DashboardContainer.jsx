"use client";
import StatsPanel from "./StatsPanel";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
export default function DashboardContainer() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-col gap-5">
      <StatsPanel></StatsPanel>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg shadow hover:shadow-lg w-fit border bg-white p-5"
      />
    </div>
  );
}
