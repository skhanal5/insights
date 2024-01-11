import { Input } from "@/components/ui/input";

//prop drilling from DataTable??
//TODO: need to pass in the state function to fix prop
export default function SearchFilter({ table }) {
  return (
    <div className="flex items-center">
      <Input
        placeholder="Search application..."
        value={(table.getColumn("company")?.getFilterValue()) ?? ""}
        onChange={(event) =>
          table.getColumn("company")?.setFilterValue(event.target.value)
        }
        className="text-sm max-w-sm focus:outline-none"
      />
    </div>
  );
}
