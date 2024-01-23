import { Button } from "@/components/shadcn/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import DialogContents from "./DialogContents";
import { useState } from "react";

export default function AddDialogBtn({applications, setApplications}) {
  const [open, setOpen] = useState(false)

  const closeDialog = () => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-blue-600 hover:bg-blue-500 flex flex-row gap-2"
        >
          <span className="hidden lg:flex">Add</span>
          <span className="w-4">
            <PlusCircleIcon></PlusCircleIcon>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContents applications={applications} setApplications={setApplications} closeDialog={closeDialog}></DialogContents>
    </Dialog>
  );
}
