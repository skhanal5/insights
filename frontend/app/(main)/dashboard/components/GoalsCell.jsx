import {
  BellAlertIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

export default function GoalsCell({ type, value }) {
  const iconStyle = "h-4 md:h-5 items-center text-slate-500/80";

  //is this duplicity & is this a good practice?
  const getFormattedTitle = () => {
    switch (type) {
      case "new_goals":
        return "New Goals";
      case "in_progress":
        return "In Progress";
      case "completed":
        return "Completed";
    }
  };
  const getBgColorFromType = () => {
    switch (type) {
      case "new_goals":
        return "bg-gradient-to-r from-sky-200 to-sky-300";
      case "in_progress":
        return "bg-gradient-to-r from-yellow-200 to-yellow-300";
      case "completed":
        return "bg-gradient-to-r from-green-200 to-green-300";
    }
  };
  const getIconFromType = () => {
    switch (type) {
      case "new_goals":
        return <BellAlertIcon className={iconStyle}></BellAlertIcon>;
      case "in_progress":
        return <ClockIcon className={iconStyle}></ClockIcon>;
      case "completed":
        return (
          <ClipboardDocumentCheckIcon
            className={iconStyle}
          ></ClipboardDocumentCheckIcon>
        );
    }
  };

  return (
    <div
      className={`w-1/2 h-56 p-5 ${getBgColorFromType()} shadow focus:shadow-lg rounded-lg flex flex-col justify-between`}
    >
      <div className="flex flex-row gap-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full p-2 bg-slate-50/40">
            {getIconFromType()}
          </div>
          <span className="font-semibold text-lg">
            {getFormattedTitle()}
          </span>
        </div>
        <span className="p-1">
          <EllipsisVerticalIcon className="w-5 rounded-lg hover:cursor-pointer hover:bg-slate-50/10"></EllipsisVerticalIcon>
        </span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
