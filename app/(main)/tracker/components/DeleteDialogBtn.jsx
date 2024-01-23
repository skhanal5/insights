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
} from "@/components/shadcn/alert-dialog";

export default function DeleteDialogBtn({applications, setApplications, targetApplication}) {

  const deleteApplication = () => {
    setApplications(
      applications.filter(app =>
        app.app_id !== targetApplication.id
      )
    );
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    const response = await fetch("https://rswxhfle0j.execute-api.us-east-1.amazonaws.com/v1/applications", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: targetApplication.email,
        app_id: targetApplication.app_id
      }),
    }); 
    const data = await response.json();
    console.log(data);
    deleteApplication(targetApplication.app_id);

    //close dialog
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-700 hover:cursor-pointer hover:bg-slate-100 w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50">Delete application</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete the application permanently.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-red-700 hover:bg-red-700/90">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
