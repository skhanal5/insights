import GoalsSummaryCell from "./GoalsSummaryCell";
import Link from "next/link";

export default function GoalsSummaryPanel() {
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
      <div className="flex flex-row justify-between">
        <div className="font-semibold">Goals Summary</div>
        <Link href="/goals">
          <div className="text-xs text-slate-400/90 hover:cursor-pointer hover:text-slate-400/50">
            View more
          </div>
        </Link>
      </div>
      {goalStatsByGroup.map((goal) => {
        return (
          <GoalsSummaryCell
            key={goal.type}
            type={goal.type}
            value={goal.value}
          ></GoalsSummaryCell>
        );
      })}
    </div>
  );
}
