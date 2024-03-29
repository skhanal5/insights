"use client";

import HeaderTitle from "./HeaderTitle";
import HeaderProfile from "./HeaderProfile";

export default function Header() {

  return (
    <div className="flex flex-row justify-between gap-2">
      <HeaderTitle></HeaderTitle>
      <HeaderProfile></HeaderProfile>
    </div>
  );
}
