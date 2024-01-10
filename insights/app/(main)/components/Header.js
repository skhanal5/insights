"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const renderHeader = () => {
    if (pathName == "/home") {
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
    <div className="flex flex-col">
          {renderHeader()}
    </div>
  );
}
