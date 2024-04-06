import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function ReminderBadge() {
  return (
    <div className="p-2 h-max w-1/3 lg:w-1/2 flex justify-content items-center bg-white rounded-full shadow hover:shadow-lg outline outline-4 outline-sky-200/50">
        <BuildingOfficeIcon className="w-full text-blue-200"></BuildingOfficeIcon>
    </div>
  );
}
