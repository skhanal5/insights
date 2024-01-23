"use client";

import StatusCell from "./components/StatusCell";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  ChevronUpDownIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "./components/DataTable";

export default function Tracker() {
  const [applications, setApplications] = useState([]);
  const { data: session, status } = useSession();

  const getAllApplications = async () => {
    const response = await fetch(
      "https://rswxhfle0j.execute-api.us-east-1.amazonaws.com/v1/applications/" +
        session?.user?.email,
      {
        method: "GET",
      }
    );

    const applicationData = await response.json();
    if (applicationData != "No applications found") {
      setApplications([...applications, ...applicationData]);
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  const deleteApplication = (targetID) => {
    setApplications(
      applications.filter((app) => app.app_id !== targetID)
    );
  };

  const handleDelete = async (targetApplication, e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://rswxhfle0j.execute-api.us-east-1.amazonaws.com/v1/applications/" + targetApplication.email, {
        method: "POST",
        body: JSON.stringify({
          app_id: targetApplication.app_id
        }),
      });
      console.log(response)
      const data = await response.json();
      console.log(data);
      if (data != "Failed to delete") {
        deleteApplication(targetApplication.app_id); 
      } else {
        //handle deletion error here 
      }
    } catch (error) {
      //handle error here
      console.log(error)
    }
    //close dialog
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "Company",
        header: ({ column }) => {
          return (
            <Button
              className="p-2"
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
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
        header: "Location",
      },
      {
        accessorKey: "Date",
        header: ({ column }) => {
          return (
            <Button
              className="p-2"
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Date
              <ChevronUpDownIcon className="ml-2 h-4 w-4"></ChevronUpDownIcon>
            </Button>
          );
        },
      },
      {
        accessorKey: "Status",
        header: "Status",
        cell: ({ row }) => {
          const applicationData = row.original;
          return <StatusCell status={applicationData.Status}></StatusCell>;
        },
      },
      {
        accessorKey: "Actions",
        header: "Actions",
        cell: ({row}) => {
          const applicationData = row.original;
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open actions menu</span>
                  <EllipsisHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:cursor-pointer">
                  View application details
                </DropdownMenuItem>
                <AlertDialog>
                  <AlertDialogTrigger className="text-red-700 hover:cursor-pointer hover:bg-slate-100 w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50">
                    Delete application
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will delete the
                        application permanently.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => handleDelete(applicationData, e)}
                        value={applicationData}
                        className="bg-red-700 hover:bg-red-700/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [applications]
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={applications}
        applications={applications}
        setApplications={setApplications}
      ></DataTable>
    </div>
  );
}
