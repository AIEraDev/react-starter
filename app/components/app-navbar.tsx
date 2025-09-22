import { Input } from "antd";
import { SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function AppNavbar() {
  return (
    <nav className="flex justify-between h-20">
      <Input size="large" placeholder="large size" prefix={<SearchIcon />} />

      <div>
        <button></button>

        <Avatar>
          <AvatarImage src="https://github.com/AIEraDev.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
