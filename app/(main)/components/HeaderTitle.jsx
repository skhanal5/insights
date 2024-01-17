"use client";
import { usePathname } from "next/navigation";
export default function HeaderTitle() {
  const pathName = usePathname();

  const renderHeader = (pathName) => {
    let header = "";
    let description = "";
    switch (pathName) {
      case "/dashboard":
        header = "Dashboard";
        description = "Here are some quick insights into your job search.";
        break;
      case "/tracker":
        header = "Tracker";
        description = "Keep track of all of your existing job applications.";
        break;
    }
    return (
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl"> {header} </h2>
        <p className="text-xs"> {description} </p>
      </div>
    );
  };

  return renderHeader(pathName);
}
