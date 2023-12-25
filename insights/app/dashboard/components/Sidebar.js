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
      icon: <ChartBarSquareIcon className="w-full md:w-1/6 lg:w-1/12" />,
    },
    {
      name: "Tracker",
      href: "/dashboard/tracker",
      icon: <ClipboardDocumentListIcon className="w-full md:w-1/6 lg:w-1/12" />,
    },
    {
      name: "Goals",
      href: "/dashboard/goals",
      icon: <QueueListIcon className="w-full md:w-1/6 lg:w-1/12" />,
    },
    {
      name: "Metrics",
      href: "/dashboard/metrics",
      icon: <ChartPieIcon className="w-full md:w-1/6 lg:w-1/12" />,
    },
  ];

  return (
    <div className="p-5 w-1/6 lg:w-2/12 border-r border-gray-300">
      <ul className="flex flex-col gap-3 yt">
        {paths.map((path, pathIndex) => (
          <li className="text-base">
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
