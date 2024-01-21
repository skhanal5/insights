"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns"

export default function Tracker() {
  const [data, setData] = useState([])
  const { data: session, status } = useSession()
  
  const getAllApplications = async () => {
    const response = await fetch("https://rswxhfle0j.execute-api.us-east-1.amazonaws.com/v1/applications/" + session?.user?.email, {
      method: "GET",
    })

    const appData = await response.json();
    setData([appData])
  }
  
  useEffect(() => {
    const applications = getAllApplications();
    console.log(data)
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
}
