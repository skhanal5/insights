import RecentAppsCell from "./RecentAppsCell";

export default function RecentApps() {
  //get data here or from the parent
  const recentApplications = [
    {
      company: "Amazon",
      role: "Frontend Engineer - Devices",
    },
    {
      company: "Microsoft",
      role: "Software Engineer IC2",
    },
    {
      company: "TikTok",
      role: "Infrastructure Engineer I",
    },
  ];
  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded-lg shadow hover:shadow-lg">
      <div className="font-semibold">Recent Apps</div>
      <div className="flex flex-col gap-2">
        {recentApplications.map((application) => {
          return (
            <RecentAppsCell
              key={application.company}
              company={application.company}
              role={application.role}
            ></RecentAppsCell>
          );
        })}
      </div>
    </div>
  );
}
