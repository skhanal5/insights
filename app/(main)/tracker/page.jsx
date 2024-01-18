import { DataTable } from "./components/DataTable";
import {columns} from "./components/Columns"
async function getData() {
  
  // Fetch data from your API here.
  return [
  ]
}

export default async function Tracker() {
  const data = await getData()

  return (
    <div>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
}
