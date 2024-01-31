import {
  BellAlertIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import { Progress } from "@/components/ui/progress";

export default function GoalsCell({ type, value }) {
  const getCellStyle = () => {
    switch (type) {
      case "New Goals": {
        return {
          icon: <BellAlertIcon></BellAlertIcon>,
        };
      }
      case "In Progress": {
        return {
          icon: <RocketLaunchIcon></RocketLaunchIcon>,
        };
      }

      case "Completed": {
        return {
          icon: <CheckCircleIcon></CheckCircleIcon>,
        };
      }
    }
  };

  const style = getCellStyle();

  return (
    <div className="p-5 shadow hover:shadow-lg rounded-lg flex flex-col items-center justify-content hover:cursor-pointer transition w-full">
      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-amber-100/80 rounded-full p-2 bg-slate-100/95">
            <div className="w-4">{style.icon}</div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm">{type}</span>
          <div className="flex flex-row gap-2 items-center">
            <Progress value={value}/>
            <div className="text-sm">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
