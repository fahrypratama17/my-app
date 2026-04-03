"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import VerificationTable from "@/feature/cms/verifikasi/components/VerificationTable";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import VerifModal from "@/feature/cms/verifikasi/components/VerifModal";
import VerifikasiCardMobile from "@/feature/cms/verifikasi/components/VerifikasiCardMobile";
import type { Verif } from "@/feature/cms/verifikasi/types/type";

type Props = {
  data: Verif[];
};

const ITEMS_PER_PAGE = 6;

const AdminVerifikasiInteractive = ({ data }: Props) => {
  const [openScan, setOpenScan] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-4 md:hidden">
        <VerifikasiCardMobile
          data={paginatedData}
          onBayar={() => setOpenScan(true)}
        />
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

      <VerificationTable data={data} onBayar={() => setOpenScan(true)} />

      <Dialog open={openScan} onOpenChange={setOpenScan}>
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 flex flex-col gap-2 rounded-t-[28px] bg-green-50 px-4 py-6 shadow-[0px_20px_10px_0px_black] md:px-13">
            <p className="text-[18px] font-bold md:text-3xl">Detail Verifikasi</p>
            <p className="text-[8px] font-medium md:text-[16px]">SUP-101</p>
          </DialogTitle>
          <VerifModal />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminVerifikasiInteractive;

