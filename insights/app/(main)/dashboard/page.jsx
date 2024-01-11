import TableUtilities from "./components/TableUtilities";
import { DataTable } from "./components/DataTable";
import {columns} from "./components/Columns"
async function getData() {
  
  // Fetch data from your API here.
  return [
    {
      id: 1,
      company: "Belvedere Trading Company",
      role: "SWE - Early Career",
      location: "Chicago, IL",
      link: "google.com",
      date_applied: "08/01/2023",
      status: "Auto Rejected",
      notes: "Resume screened",
    },
    {
      id: 2,
      company: "Amazon",
      role: "Software Development Engineer L4",
      location: "Seattle, WA",
      link: "google.com",
      date_applied:  "07/05/2023",
      status: "Offer",
      notes: "2 Question OA, 1 Virtual Onsite",
    },
    {
      id: 3,
      company: "Two Sigma",
      role: "Quant Developer",
      location: "Chicago, IL",
      link: "google.com",
      date_applied:  "07/30/2023",
      status: "Phone Screen",
      notes: "C++ Heavy",
    },
    {
      id: 4,
      company: "NSA",
      role: "Early Career SWE",
      location: "Fort Meade, MD",
      link: "google.com",
      date_applied: "08/02/2023",
      status: "Ghosted",
      notes: "Security Clearance Required",
    },
  ]
}

export default async function Tracker() {
  const data = await getData()

  return (
    <div className="flex flex-col gap-5">
      <TableUtilities></TableUtilities>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
}
