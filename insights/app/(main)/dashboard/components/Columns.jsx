"use client";

import StatusCell from "./StatusCell";
import { Button } from "@/components/ui/button";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export const columns = [
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <Button
          className="p-2"
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
    accessorKey: "applied",
    header: ({ column }) => {
      return (
        <Button
          className="p-2"
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
    cell: ({row}) => {
      const applicationData = row.original
      return (
        <StatusCell status={applicationData.status}></StatusCell>
      )
    }
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
