import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

export default function HeaderProfile() {
  const getInitials = () => {
    return "";
  };

  return (
    <DropdownMenu className="w-full">
      <DropdownMenuTrigger asChild>
        <div className="p-2 flex flex-row gap-3 items-center justify-content hover:cursor-pointer hover:bg-slate-700/10 hover:rounded-lg">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{getInitials}</AvatarFallback>
          </Avatar>
          <span className="text-sm">Subodh</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View Account Information</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
