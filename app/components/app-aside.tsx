import { ChevronUp, User2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "~/components/ui/sidebar";

export default function AppAside() {
  return (
    <aside className="w-[20vw] h-full bg-green-400 flex flex-col">
      <div className="h-16 w-full flex items-center gap-x-2 bg-orange-200 p-4">
        <span className="w-10 h-10 bg-gray-700 rounded-sm flex justify-center items-center text-white">N</span>
        <span className="font-medium text-lg">NewsHub</span>
      </div>

      <div className="h-full"></div>

      <footer>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-gray-300 w-full flex items-center px-3 py-5 text-lg rounded-md">
            <User2 /> Username
            <ChevronUp className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-full">
            <DropdownMenuItem>
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </footer>
    </aside>
  );
}
