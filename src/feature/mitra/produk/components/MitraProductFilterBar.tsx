import { Input } from "@/shared/component/ui/input";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";

const MitraProductFilterBar = () => {
  return (
    <div className="grid w-full grid-cols-[2fr_0.6fr] gap-3 md:gap-6">
      <div className="relative w-full">
        <Input
          className="peer border-2 border-green-900 bg-white py-1 text-[8px] transition-all duration-200 placeholder:text-[8px] placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2 md:py-5 md:text-lg md:placeholder:text-lg md:placeholder:font-medium"
          placeholder="Cari Pesanan"
        />

        <Search className="pointer-events-none absolute top-1 left-3 p-1 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100 md:top-2.5 md:p-0" />
      </div>
      <div className="w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="flex items-center justify-between">
            <Button className="flex h-full w-full items-center justify-between border-2 border-green-900 bg-transparent text-[#A7A7A7]">
              <p className="text-[8px] font-medium md:text-lg">Semua</p>
              <ChevronDown className="p-1 md:p-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Satu</DropdownMenuItem>
              <DropdownMenuItem>Dua</DropdownMenuItem>
              <DropdownMenuItem>Tiga</DropdownMenuItem>
              <DropdownMenuItem>Empat</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MitraProductFilterBar;

