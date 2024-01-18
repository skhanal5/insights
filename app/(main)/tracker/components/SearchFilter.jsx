import { Input } from "@/components/shadcn/input";

//prop drilling from DataTable??
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
