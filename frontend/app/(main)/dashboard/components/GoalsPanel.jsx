import GoalsCell from "./GoalCell";

export default function GoalsPanel() {
  //get data here or from the parent
  const goalStatsByGroup = [
    {
      type: "New Goals",
      value: 50,
    },
    {
      type: "In Progress",
      value: 30,
    },
    {
      type: "Completed",
      value: 15,
    },
  ];

  return (
    <div className="h-full p-5 flex flex-col gap-5 bg-white shadow hover:shadow-lg rounded-lg">
      <div className="font-semibold">Goals Summary</div>
      {goalStatsByGroup.map((goal) => {
        return (
          <GoalsCell
            key={goal.type}
            type={goal.type}
            value={goal.value}
          ></GoalsCell>
        );
      })}
    </div>
  );
}
