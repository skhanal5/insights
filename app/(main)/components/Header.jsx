"use client";

import { usePathname } from "next/navigation";
import HeaderTitle from "./HeaderTitle";
import HeaderProfile from "./HeaderProfile";

export default function Header() {

  return (
    <div className="flex flex-row justify-between">
      <HeaderTitle></HeaderTitle>
      <HeaderProfile></HeaderProfile>
    </div>
  );
}
