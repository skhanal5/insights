"use client";

import { usePathname } from "next/navigation";
import HeaderContent from "./HeaderContent";

export default function Header() {
  const pathName = usePathname();

  const renderHeader = (pathName) => {
    switch (pathName) {
      case "/dashboard":
        return (
          <HeaderContent
            header="Dashboard"
            description="Here are some quick insights into your job search."
          ></HeaderContent>
        );
      case "/tracker":
        return (
          <HeaderContent
            header="Tracker"
            description="Keep track of all of your existing job applications."
          ></HeaderContent>
        );
    }
  };

  return <div className="flex flex-col">{renderHeader(pathName)}</div>;
}
