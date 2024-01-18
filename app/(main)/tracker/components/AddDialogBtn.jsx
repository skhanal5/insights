import { Button } from "@/components/shadcn/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import DialogContents from "./DialogContents";

export default function AddDialogBtn() {
  return (
    <Dialog>
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
      <DialogContents></DialogContents>
    </Dialog>
  );
}
