import { UtilButton } from "./TableUtilBtn";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Fields from "./Fields";

export default function TableUtilities({table}) {
  return (
    <div className="flex justify-between w-full mt-5">
      <div className="flex flex-row gap-5">
        <Fields table={table}></Fields>
        <UtilButton
          buttonName="Import"
          buttonIcon={<ArrowDownTrayIcon></ArrowDownTrayIcon>}
          buttonStyle=""
        ></UtilButton>
        <UtilButton
          buttonName="Add"
          buttonIcon={<PlusIcon></PlusIcon>}
          buttonStyle="text-white hover:text-white bg-blue-600 hover:bg-blue-500"
        ></UtilButton>
      </div>
    </div>
  );
}
