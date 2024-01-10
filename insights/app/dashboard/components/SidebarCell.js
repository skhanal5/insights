import Link from "next/link";

export default function SidebarCell({ icon, link, name }) {
  return (
    <div className="text-slate-500 w-8">
      {icon}
    </div>
  );
}
