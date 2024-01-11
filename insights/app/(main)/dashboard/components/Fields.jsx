"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Fields() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showPanel, setShowPanel] = React.useState(false);
  const columns = ["Company", "Role", "Status"];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Fields</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-13">
        {columns.map((columnName, columnIndex) => (
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
            key={columnIndex}
          >
            {columnName}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
