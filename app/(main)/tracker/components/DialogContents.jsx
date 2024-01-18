"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Button } from "@/components/shadcn/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
} from "@/components/shadcn/dialog";
import StatusCell from "./StatusCell";
import { DatePicker } from "./DatePicker";
import { useRef, useState } from "react";
import ErrorPopup from "@/components/ErrorPopup";

export default function DialogContents({ closeDialog }) {
  const formRef = useRef(null);
  const company = useRef("");
  const role = useRef("");
  const location = useRef("");
  const [status, setStatus] = useState("applied");
  const [date, setDate] = useState();
  const [error, setError] = useState("");

  const resetFields = () => {
    company.current = ""
    role.current = ""
    location.current= ""
    setError("");
    setDate(null);
    setStatus("applied");
  };

  const handleAddApplication = async (e) => {
    //doesn't do anything iirc
    e.preventDefault();

    //handle error condition
    if (!company || !role || !location || !date) {
      setError("All fields must be nonempty. Please try again");
      return;
    }

    //send request to API
    //process.env doesn't work for some reason..\
    //need a way to generate uuid for each user..
    //const response = await fetch(process.env.BACKEND_API_URL + "/users/");

    //handle loading somehow

    //close
    formRef.current.reset();
    resetFields();
    console.log(company);
    closeDialog();
  };

  return (
    <form ref={formRef} >
      <DialogContent className="w-[350px] lg:w-fit">
        <DialogHeader>
          <DialogTitle className="text-sm text-left lg:text-base">
            Add a new application
          </DialogTitle>
          <DialogDescription className="text-xs text-left lg:text-sm">
            Fill in the details about your job application. Click submit when
            you're done.
          </DialogDescription>
          <ErrorPopup errorMessage={error}></ErrorPopup>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center justify-content">
          <div className="grid grid-cols-4 items-center justify-content gap-4">
            <Label htmlFor="company" className="text-xs text-right lg:text-sm">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Enter company name"
              className="text-xs col-span-3 lg:text-sm"
              onChange={(e) => (company.current = e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-xs text-right lg:text-sm">
              Role
            </Label>
            <Input
              id="role"
              placeholder="Enter your job role"
              className="text-xs col-span-3 lg:text-sm"
              onChange={(e) => (role.current = e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-xs text-right lg:text-sm">
              Location
            </Label>
            <Input
              id="location"
              placeholder="Enter job location"
              className="text-xs col-span-3 lg:text-sm"
              onChange={(e) => (location.current = e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="applied" className="text-xs text-right lg:text-sm">
              Date Applied
            </Label>
            <DatePicker date={date} setDate={setDate}></DatePicker>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-xs text-right lg:text-sm">
              Application Status
            </Label>
            <Select onValueChange={setStatus}>
              <SelectTrigger className="col-span-3">
                <SelectValue
                  placeholder={<StatusCell status="Applied"></StatusCell>}
                />
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
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button
              onClick={handleAddApplication}
              className="text-white hover:text-white bg-blue-600 hover:bg-blue-500"
              type="submit"
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </form>
  );
}
