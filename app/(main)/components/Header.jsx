"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const renderHeader = () => {
    if (pathName == "/tracker") {
      return (
        <div>
          <h2 className="font-bold text-xl font-blue-700"> Tracker </h2>
          <p className="mt-1 text-xs font-light font-gray-100">
            Keep track of all of your existing job applications.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col">
          {renderHeader()}
    </div>
  );
}
