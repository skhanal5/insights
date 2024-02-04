import ReminderCell from "./ReminderCell";

export default function ReminderPanel() {
  //get data from parent
  const company = "Microsoft";
  const role = "Software Engineer";
  const date_applied = "10/19/2014";

  return (
    <div className="lg:w-max p-5 flex flex-col gap-1 rounded-lg bg-blue-600 justify-between items-center shadow hover:shadow-lg transition">
      <ReminderCell company={company} role={role} date_applied={date_applied}></ReminderCell>
      <div className="flex flex-col gap-3 items-center">
        <div className="font-thin text-sm text-center text-white">
          Have you heard back from this company?
        </div>
        <button className="p-2 bg-white rounded-lg text-xs font-semibold shadow">
          Update Application
        </button>
      </div>
    </div>
  );
}
