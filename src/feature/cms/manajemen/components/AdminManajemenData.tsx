"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/shared/component/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";
import { useDebounce } from "@/hooks/use-debounce";
import AdminManajemenCardSection from "@/feature/cms/manajemen/components/AdminManajemenCardSection";
import { cardData } from "@/feature/cms/manajemen/data/data";

type StatusFilter = "Semua" | "Aktif" | "Non Aktif";

const AdminManajemenData = () => {
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Semua");

  const debouncedKeyword = useDebounce(keyword.trim(), 400);
  const lowerKeyword = debouncedKeyword.toLowerCase();
  const filteredData = cardData.filter((item) => {
    const matchesName = !lowerKeyword
      ? true
      : item.title.toLowerCase().includes(lowerKeyword);
    const matchesStatus =
      statusFilter === "Semua" ? true : item.status === statusFilter;

    return matchesName && matchesStatus;
  });

  return (
    <>
      <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
        <div className="relative w-full">
          <Input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            className="peer border-2 border-green-900 bg-white py-1 text-[8px] transition-all duration-200 placeholder:text-[8px] placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2 md:py-5 md:text-lg md:placeholder:text-lg md:placeholder:font-medium"
            placeholder="Cari Nama Usaha"
          />

          <Search className="pointer-events-none absolute top-1 left-3 p-1 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100 md:top-2.5 md:p-0" />
        </div>
        <div className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="flex items-center justify-between"
            >
              <Button className="flex h-full w-full items-center justify-between border-2 border-green-900 bg-transparent text-[#A7A7A7]">
                <p className="text-[8px] font-medium md:text-lg">{statusFilter}</p>
                <ChevronDown className="p-1 md:p-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setStatusFilter("Semua")}>
                  Semua
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Aktif")}>
                  Aktif
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Non Aktif")}>
                  Non Aktif
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AdminManajemenCardSection data={filteredData} />
    </>
  );
};

export default AdminManajemenData;

