import { signOut } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function HeaderProfile() {
  const { data : session } = useSession();

  const getInitials = () => {
    if (session?.user?.name) {
      return session.user.name[0]
    };
  };

  return (
    <DropdownMenu className="w-full">
      <DropdownMenuTrigger asChild>
        <div className="p-0 md:p-2 select-none flex flex-row gap-3 items-center justify-content hover:cursor-pointer hover:bg-slate-700/10 rounded-lg transition ease-in duration-150">
          <Avatar>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className="bg-gradient-to-r from-blue-700 to-blue-500 font-semibold text-white">{getInitials()}</AvatarFallback>
          </Avatar>
          <span className="text-sm hidden md:flex lg:flex">{session?.user?.name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">View account details</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
