"use client";

import { BellIcon, MoonIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const renderHeader = () => {
    if (pathName == "/dashboard") {
      return (
        <div>
          <h2 className="font-bold text-xl font-blue-700"> Dashboard </h2>
          <p className="mt-1 text-xs font-light font-gray-100">
            Here are some quick insights for your job search.
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col">
          {renderHeader()}
        </div>
      </div>
    </div>
  );
}
