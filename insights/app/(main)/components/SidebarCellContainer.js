import SidebarCell from "./SidebarCell";
import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

export default function SidebarCellContainer() {
  const paths = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <ChartBarSquareIcon/>,
    },
    {
      name: "Tracker",
      link: "/dashboard/tracker",
      icon: <ClipboardDocumentListIcon/>,
    },
    {
      name: "Goals",
      link: "/dashboard/goals",
      icon: <QueueListIcon />,
    },
    {
      name: "Metrics",
      link: "/dashboard/metrics",
      icon: <ChartPieIcon/>,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <span className="hidden lg:flex text-sm font-normal text-slate-400">Menu</span>
      <div className="flex flex-col gap-5 items-center lg:items-start">
        {paths.map((path, pathIndex) => (
          <SidebarCell
            key={pathIndex}
            icon={path.icon}
            name={path.name}
            link={path.link}
          ></SidebarCell>
        ))}
      </div>
    </div>
  );
}
