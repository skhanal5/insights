import { Input } from "@/components/ui/input";

//prop drilling from DataTable??
export default function SearchFilter({ table }) {
  return (
    <div className="flex items-center">
      <Input
        placeholder="Search application..."
        value={(table.getColumn("Company")?.getFilterValue()) ?? ""}
        onChange={(event) =>
          table.getColumn("Company")?.setFilterValue(event.target.value)
        }
        className="text-sm max-w-sm focus:outline-none"
      />
    </div>
  );
}
