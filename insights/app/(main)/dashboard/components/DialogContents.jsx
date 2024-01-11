"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import StatusCell from "./StatusCell";
import { DatePicker } from "./DatePicker";
export default function DialogContents() {
  const [date, setDate] = React.useState();

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add a new application</DialogTitle>
        <DialogDescription>
          Fill in the details about your job application. Click submit when
          you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="company" className="text-right">
            Company
          </Label>
          <Input
            id="company"
            defaultValue="Enter company name"
            className="col-span-3 text-sm"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="role" className="text-right">
            Role
          </Label>
          <Input
            id="role"
            defaultValue="Enter your job role"
            className="col-span-3 text-sm"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="location" className="text-right">
            Location
          </Label>
          <Input
            id="location"
            defaultValue="Enter job location"
            className="col-span-3 text-sm"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="applied" className="text-right">
            Date Applied
          </Label>
          <DatePicker></DatePicker>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="status" className="text-right">
            Application Status
          </Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={<StatusCell status="Applied"></StatusCell>} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="offer">
                <StatusCell status="Offer"></StatusCell>
              </SelectItem>
              <SelectItem value="screen">
                <StatusCell status="Phone Screen"></StatusCell>
              </SelectItem>
              <SelectItem value="rejected">
                <StatusCell status="Rejected"></StatusCell>
              </SelectItem>
              <SelectItem value="interview">
                <StatusCell status="Interview"></StatusCell>
              </SelectItem>
              <SelectItem value="ghosted">
                <StatusCell status="Ghosted"></StatusCell>
              </SelectItem>
              <SelectItem value="assessment">
                <StatusCell status="Assessment"></StatusCell>
              </SelectItem>
              <SelectItem value="applied">
                <StatusCell status="Applied"></StatusCell>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button className="text-white hover:text-white bg-blue-600 hover:bg-blue-500" type="submit">Submit</Button>
      </DialogFooter>
    </DialogContent>
  );
}
