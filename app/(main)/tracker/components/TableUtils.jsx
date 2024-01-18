import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import AddDialogBtn from "./AddDialogBtn";
import Fields from "./Fields";
import SearchFilter from "./SearchFilter";
import { Button } from "@/components/shadcn/button";

export default function TableUtilities({ table }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3">
      <SearchFilter table={table}></SearchFilter>
      <div className="flex flex-row gap-3">
        <Fields table={table}></Fields>
        <Button
          variant="outline"
          className="flex flex-row gap-2"
        >
          <span className="hidden lg:flex">Import</span>
          <span className="w-4"><ArrowDownTrayIcon></ArrowDownTrayIcon></span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-row gap-2"
        >
          <span className="hidden lg:flex">Export</span>
          <span className="w-4"><ArrowUpTrayIcon></ArrowUpTrayIcon></span>
        </Button>
        <AddDialogBtn></AddDialogBtn>
      </div>
    </div>
  );
}
