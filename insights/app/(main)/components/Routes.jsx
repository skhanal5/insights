'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Routes({ icon, link, name }) {
  
  //haven't decided where the best place is to put this
  const pathname = usePathname()
  const activeStyling = pathname == link ? "text-blue-600 font-semibold" : "text-slate-500"
  return (
    <Link href={link} className={`flex flex-row items-center gap-2 ${activeStyling}`}>
      <div className="w-7">{icon}</div>
      <div className="hidden lg:flex">{name}</div>
    </Link>
  );
}
