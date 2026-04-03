"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import DashboardCardMobile from "@/feature/mitra/dashboard/components/DashboardCardMobile";
import type { Mitra } from "@/feature/mitra/dashboard/types/type";

type Props = {
  data: Mitra[];
  itemsPerPage?: number;
};

const PesananMobilePagination = ({ data, itemsPerPage = 6 }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-4 md:hidden">
        <DashboardCardMobile data={paginatedData} />
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
    </>
  );
};

export default PesananMobilePagination;

