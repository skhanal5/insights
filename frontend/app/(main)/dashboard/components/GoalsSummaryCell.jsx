import {
  BellAlertIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Progress } from "@/components/ui/progress";
import Badge from "./Badge";

export default function GoalsSummaryCell({ type, value }) {
  const getCellStyle = () => {
    switch (type) {
      case "New Goals": {
        return {
          color: "bg-blue-200/50",
          icon: <BellAlertIcon></BellAlertIcon>,
        };
      }
      case "In Progress": {
        return {
          color: "bg-yellow-200/50",
          icon: <RocketLaunchIcon></RocketLaunchIcon>,
        };
      }

      case "Completed": {
        return {
          color: "bg-green-200/50",
          icon: <CheckCircleIcon></CheckCircleIcon>,
        };
      }
    }
  };

  const style = getCellStyle();

  return (
    <div className="p-5 w-full flex flex-row gap-5 justify-content items-center rounded-lg shadow hover:shadow-lg hover:cursor-pointer transition">
      <Badge color={style.color} icon={style.icon}></Badge>
      <div className="flex flex-col gap-1 w-full">
        <span className="text-sm">{type}</span>
        <div className="flex flex-row gap-2 items-center">
          <Progress className="h-2" color={style.color} value={value} />
          <div className="text-sm">{value}</div>
        </div>
      </div>
    </div>
  );
}
