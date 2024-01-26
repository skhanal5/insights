import GoalsCell from "./GoalsCell";
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
    <div className="flex flex-col gap-2">
      <div className="font-semibold">Goals Benchmark</div>
      <div className="flex flex-row gap-5">
        {goalStatsByGroup.map((group) => {
          return (
            <GoalsCell
              key={group.type}
              type={group.type}
              value={group.value}
            ></GoalsCell>
          );
        })}
      </div>
    </div>
  );
}
