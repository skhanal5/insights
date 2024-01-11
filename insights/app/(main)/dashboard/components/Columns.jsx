"use client";

import { Button } from "@/components/ui/button";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export const columns = [
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company
          <ChevronUpDownIcon className="ml-2 h-4 w-4"></ChevronUpDownIcon>
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "location",
    header: "Location"
  },
  {
    accessorKey: "date_applied",
    header: ({ column }) => {
      return (
        <Button
          className="text-left"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Applied
          <ChevronUpDownIcon className="ml-2 h-4 w-4"></ChevronUpDownIcon>
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];

const headers = [
  "Company",
  "Role",
  "Location",
  "Date",
  "Status",
  "Notes",
  "Actions",
];
