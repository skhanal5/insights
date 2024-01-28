export default function GoalsPanel() {
  //get data here or from the parent
  const goalStatsByGroup = [
    {
      type: "new_goals",
      value: 50,
    },
    {
      type: "in_progress",
      value: 30,
    },
    {
      type: "completed",
      value: 15,
    },
  ];

  return (
    <div className="flex flex-col gap-5 bg-white shadow hover:shadow-lg rounded-lg">
      <div className="fotn-semibo">
        Goals Summary
      </div>
    </div>
  );
}
