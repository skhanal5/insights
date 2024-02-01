import {
  BriefcaseIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

export default function RecentAppsCell({ company, role }) {

  const truncateText = () => {
    if (role.length > 10) {
      return role.substring(0,10) + "..."
    }
  }

  return (
    <div className="lg:h-1/3 p-5 shadow hover:shadow-lg rounded-lg flex flex-col hover:cursor-pointer transition">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-amber-200/50 rounded-full p-2 bg-slate-100/95">
            <BriefcaseIcon className="w-4"></BriefcaseIcon>
          </div>
        </div>
        <div className="flex flex-col lg:w-20">
          <span className="text-xs lg:text-sm">{company}</span>
          <span className="text-slate-500/95 text-xs">{truncateText()}</span>
        </div>
        <span className="hidden lg:flex p-1">
          <EllipsisVerticalIcon className="w-5 rounded-lg hover:cursor-pointer hover:bg-slate-50/10"></EllipsisVerticalIcon>
        </span>
      </div>
    </div>
  );
}
