import Link from "next/link";

export default function SidebarCell({ icon, link, name }) {
  return (
    <Link href={link} className="flex flex-row gap-2 text-slate-500">
      <div className="w-7">{icon}</div>
      <div className="hidden lg:flex">{name}</div>
    </Link>
  );
}
