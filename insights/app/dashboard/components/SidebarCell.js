import Link from "next/link";

export default function SidebarCell({ icon, href, name }) {
  return (
    <Link
      className="flex flex-row gap-2 justify-start "
      href={href}
    >
      {icon}
      <div className="hidden md:flex">{name}</div>
    </Link>
  );
}
