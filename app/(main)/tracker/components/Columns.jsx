"use client";

import StatusCell from "./StatusCell";
import { Button } from "@/components/shadcn/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"
import { ChevronUpDownIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export const columns = [
  {
    accessorKey: "Company",
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
    accessorKey: "Role",
    header: "Role",
  },
  {
    accessorKey: "Location",
    header: "Location"
  },
  {
    accessorKey: "Date Applied",
    header: ({ column }) => {
      return (
        <Button
          className="p-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Applied
          <ChevronUpDownIcon className="ml-2 h-4 w-4"></ChevronUpDownIcon>
        </Button>
      );
    },
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({row}) => {
      const applicationData = row.original
      return (
        <StatusCell status={applicationData.Status}></StatusCell>
      )
    }
  },
  {
    accessorKey: "Actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View application details</DropdownMenuItem>
            <DropdownMenuItem className="text-red-700">Delete application</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
];