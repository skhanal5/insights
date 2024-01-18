'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SidebarLink({ icon, link, name }) {
  
  //haven't decided where the best place is to put this
  const pathname = usePathname()
  const activeStyling = pathname == link ? "text-blue-600 font-semibold" : "text-slate-500"
  return (
    <Link href={link} className={`p-2 flex flex-row items-center gap-2 hover:bg-slate-100 rounded-lg transition ease-ins ${activeStyling}`}>
      <div className="w-7">{icon}</div>
      <div className="hidden lg:flex">{name}</div>
    </Link>
  );
}
