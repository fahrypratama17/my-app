"use client";

import { useState } from "react";
import MonitoringCard from "@/feature/cms/monitoring/components/MonitoringCard";
import { Input } from "@/shared/component/ui/input";
import MonitoringTable from "@/feature/cms/monitoring/components/MonitoringTable";
import { orders } from "@/feature/cms/monitoring/data/data";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";
import MonitoringCardMobile from "@/feature/cms/monitoring/components/MonitoringCardMobile";

const cardData = [
  {
    value: 12,
    status: "Menunggu",
    className: "text-orange-800 border md:border-2 border-orange-800",
  },
  {
    value: 2,
    status: "Diproses",
    className: "text-orange-600 border md:border-2 border-orange-600",
  },
  {
    value: 6,
    status: "Selesai",
    className: "text-green-500 border md:border-2 border-green-500",
  },
];

const AdminMonitoringSection = () => {
  const ITEMS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  const paginatedData = orders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="hidden w-[90%] items-center justify-between px-12 py-7 md:flex">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Admin
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-13 w-13 rounded-full bg-orange-600"></div>
            <div>
              <p className="text-xl-bold text-green-800">Admin</p>
              <p className="text-sm-semibold text-green-400">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-6 md:mx-0 md:w-[85%] md:gap-12 md:px-12 md:py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-[24px] font-bold md:text-4xl">
            Monitoring Pesanan
          </h2>
          <p className="text-[12px] font-medium md:text-lg">
            Pantau semua aktivitas pesanan
          </p>
        </div>

        <div className="grid w-[80%] grid-cols-3 gap-4 md:w-full md:gap-20">
          {cardData.map((item, index) => (
            <MonitoringCard
              key={index}
              value={item.value}
              status={item.status}
              className={item.className}
            />
          ))}
        </div>
        <div className="block w-full md:hidden">
          <div className="flex w-full items-center justify-between rounded-[12px] border border-b-0 border-green-900 bg-green-600 p-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-orange-900 bg-orange-600 p-2 text-orange-50">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-[12px] font-bold text-green-50">
                  Pesanan Terbaru
                </h2>
              </div>
            </div>
          </div>
        </div>
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
              <DropdownMenuTrigger
                asChild
                className="flex items-center justify-between"
              >
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
        <div className="grid w-full grid-cols-2 gap-4 md:hidden">
          <MonitoringCardMobile data={paginatedData} />
        </div>
        <div className="mx-auto flex items-center justify-center gap-2 md:hidden">
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <ChevronLeft />
          </Button>

          <p className="text-[10px] font-bold text-green-800">
            {currentPage} / {totalPages}
          </p>

          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="text-[10px]"
          >
            <ChevronRight />
          </Button>
        </div>

        <MonitoringTable data={orders} />
      </div>
    </section>
  );
};

export default AdminMonitoringSection;
