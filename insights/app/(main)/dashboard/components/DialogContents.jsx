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
    <DialogContent className="w-[350px] lg:w-fit">
      <DialogHeader>
        <DialogTitle className="text-sm text-left lg:text-base">Add a new application</DialogTitle>
        <DialogDescription className="text-xs text-left lg:text-sm">
          Fill in the details about your job application. Click submit when
          you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4 items-center justify-content">
        <div className="grid grid-cols-4 items-center justify-content gap-4">
          <Label htmlFor="company" className="text-xs text-right lg:text-sm">
            Company
          </Label>
          <Input
            id="company"
            defaultValue="Enter company name"
            className="text-xs col-span-3 lg:text-sm"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="role" className="text-xs text-right lg:text-sm">
            Role
          </Label>
          <Input
            id="role"
            defaultValue="Enter your job role"
            className="text-xs col-span-3 lg:text-sm"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="location" className="text-xs text-right lg:text-sm">
            Location
          </Label>
          <Input
            id="location"
            defaultValue="Enter job location"
            className="text-xs col-span-3 lg:text-sm"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="applied" className="text-xs text-right lg:text-sm">
            Date Applied
          </Label>
          <DatePicker></DatePicker>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="status" className="text-xs text-right lg:text-sm">
            Application Status
          </Label>
          <Select>
            <SelectTrigger className="col-span-3">
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