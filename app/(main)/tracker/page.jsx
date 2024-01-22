"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns"

export default function Tracker() {
  const [applications, setApplications] = useState([])
  const { data: session, status } = useSession()
  
  const getAllApplications = async () => {
    const response = await fetch("https://rswxhfle0j.execute-api.us-east-1.amazonaws.com/v1/applications/" + session?.user?.email, {
      method: "GET",
    })

    const applicationData = await response.json();
    if (applicationData != "No applications found") {
      for (const index in applicationData) {
        setApplications([...applications, applicationData[index]])
      }
    }
  }
  
  useEffect(() => {
    const applications = getAllApplications();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={applications}></DataTable>
    </div>
  );
}
