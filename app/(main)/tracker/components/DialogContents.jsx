"use client";
import {format} from "date-fns"
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
import { useSession } from "next-auth/react";

export default function DialogContents({applications, setApplications, closeDialog }) {
  const formRef = useRef(null);
  const company = useRef("");
  const role = useRef("");
  const location = useRef("");
  const [appStatus, setAppStatus] = useState("Applied");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const { data: session, status } = useSession()

  const resetFields = () => {
    company.current = ""
    role.current = ""
    location.current= ""
    setError("");
    setDate(null);
    setAppStatus("Applied");
  };

  const addApplication = (newApplication) => {
    console.log(applications)
    setApplications([...applications, ...newApplication])
  }

  const changeDateFormat = (date) => {
    let convertedDate = format(date, "MM/dd/yyyy")
    setDate(convertedDate)
  }

  const handleAddApplication = async (e) => {
    //doesn't do anything iirc
    e.preventDefault();

    //handle error condition
    if (!company || !role || !location || !date) {
      setError("All fields must be nonempty. Please try again");
      return;
    }

    const response = await fetch("https://rswxhfle0j.execute-api.us-east-1.amazonaws.com/v1/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.user.email,
        app_id: crypto.randomUUID(),
        company: company.current,
        role: role.current,
        app_location: location.current,
        date: date,
        app_status: appStatus,
      }),
    }); 
    
    //TODO: handle loading somehow

    //update client state
    const insertedItem = await response.json()
    console.log(insertedItem)
    addApplication([insertedItem])
    
    //Close dialog and reset all fields
    //formRef.current.reset();
    resetFields();
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
            <DatePicker date={date} setDate={changeDateFormat}></DatePicker>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-xs text-right lg:text-sm">
              Application Status
            </Label>
            <Select onValueChange={setAppStatus}>
              <SelectTrigger className="col-span-3">
                <SelectValue
                  placeholder={<StatusCell status="Applied"></StatusCell>}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Offer">
                  <StatusCell status="Offer"></StatusCell>
                </SelectItem>
                <SelectItem value="Phone Screen">
                  <StatusCell status="Phone Screen"></StatusCell>
                </SelectItem>
                <SelectItem value="Rejected">
                  <StatusCell status="Rejected"></StatusCell>
                </SelectItem>
                <SelectItem value="Interview">
                  <StatusCell status="Interview"></StatusCell>
                </SelectItem>
                <SelectItem value="Ghosted">
                  <StatusCell status="Ghosted"></StatusCell>
                </SelectItem>
                <SelectItem value="Assessment">
                  <StatusCell status="Assessment"></StatusCell>
                </SelectItem>
                <SelectItem value="Applied">
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
