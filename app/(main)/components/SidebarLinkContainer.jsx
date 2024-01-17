import SidebarLink from "./SidebarLink";
import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

export default function SidebarLinkContainer() {
  const paths = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <ChartBarSquareIcon/>,
    },
    {
      name: "Tracker",
      link: "/tracker",
      icon: <ClipboardDocumentListIcon/>,
    },
    {
      name: "Goals",
      link: "/goals",
      icon: <QueueListIcon />,
    },
    {
      name: "Metrics",
      link: "/metrics",
      icon: <ChartPieIcon/>,
    },
  ];
  

  return (
    <div className="flex flex-col gap-5">
      <span className="hidden lg:flex text-sm font-normal text-slate-400">Menu</span>
      <div className="flex flex-col gap-5 items-center lg:items-start">
        {paths.map((path, pathIndex) => (
          <SidebarLink
            key={pathIndex}
            icon={path.icon}
            name={path.name}
            link={path.link}
          ></SidebarLink>
        ))}
      </div>
    </div>
  );
}
