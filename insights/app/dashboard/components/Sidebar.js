"use client";

import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

import SidebarCell from "./SidebarCell";

export default function SideBar() {
  const paths = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <ChartBarSquareIcon className="w-2/6 md:w-1/6 lg:w-2/12" />,
    },
    {
      name: "Tracker",
      href: "/dashboard/tracker",
      icon: <ClipboardDocumentListIcon className="w-2/6 md:w-1/6 lg:w-2/12" />,
    },
    {
      name: "Goals",
      href: "/dashboard/goals",
      icon: <QueueListIcon className="w-2/6 md:w-1/6 lg:w-2/12" />,
    },
    {
      name: "Metrics",
      href: "/dashboard/metrics",
      icon: <ChartPieIcon className="w-2/6 md:w-1/6 lg:w-2/12" />,
    },
  ];

  return (
    <div className="w-1/6 md:p-10 lg:w-2/12 border-r border-gray-300">
      <ul className="mt-10 flex flex-col gap-5 justify-center items-start">
        <div className="hidden md:flex items-center text-sm text-gray-300">Menu</div>
        {paths.map((path, pathIndex) => (
          <li key={pathIndex}>
            <SidebarCell
              key={pathIndex}
              icon={path.icon}
              name={path.name}
              href={path.href}
            ></SidebarCell>
          </li>
        ))}
      </ul>
    </div>
  );
}
