import Link from "next/link";

export default function SidebarCell({ icon, href, name }) {
  return (
    <Link
      className="my-0 mx-auto flex flex-row gap-2 justify-center items-center"
      href={href}
    >
      {icon}
      <div className="hidden md:flex md:text-sm lg:text-base">{name}</div>
    </Link>
  );
}
