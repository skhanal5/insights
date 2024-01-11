import { UtilButton } from "./TableUtilBtn";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Fields from "./Fields";
import SearchFilter from "./SearchFilter";

export default function TableUtilities({table}) {
  return (
    <div className="flex flex-col lg:flex-row gap-3 justify-between">
      <SearchFilter table={table}></SearchFilter>
      <div className="flex flex-row gap-5">
        <Fields table={table}></Fields>
        <UtilButton
          buttonName="Export"
          buttonIcon={<ArrowDownTrayIcon></ArrowDownTrayIcon>}
          buttonStyle=""
        ></UtilButton>
        <UtilButton
          buttonName="Import"
          buttonIcon={<ArrowDownTrayIcon></ArrowDownTrayIcon>}
          buttonStyle=""
        ></UtilButton>
        <UtilButton
          buttonName="Add"
          buttonIcon={<PlusCircleIcon></PlusCircleIcon>}
          buttonStyle="text-white hover:text-white bg-blue-600 hover:bg-blue-500"
        ></UtilButton>
      </div>
    </div>
  );
}