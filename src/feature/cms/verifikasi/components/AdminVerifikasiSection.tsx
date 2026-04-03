"use client";

import { useState } from "react";
import { Input } from "@/shared/component/ui/input";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  UserRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";
import VerificationTable from "@/feature/cms/verifikasi/components/VerificationTable";
import { verif } from "@/feature/cms/verifikasi/data/data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import VerifModal from "@/feature/cms/verifikasi/components/VerifModal";
import VerifikasiCardMobile from "@/feature/cms/verifikasi/components/VerifikasiCardMobile";

const AdminVerifikasiSection = () => {
  const [openScan, setOpenScan] = useState(false);
  const ITEMS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(verif.length / ITEMS_PER_PAGE);

  const paginatedData = verif.slice(
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
            <div className="rounded-full bg-orange-600 p-3">
              <UserRound className="text-white" />
            </div>
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
            Verifikasi Mitra
          </h2>
          <p className="text-[12px] font-medium md:text-lg">
            Kelola dan verifikasi pendaftaran mitra baru di platform PANGANTARA.
          </p>
        </div>
        <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
          <div className="relative w-full">
            <Input
              className="peer border-2 border-green-900 bg-white py-1 text-[8px] transition-all duration-200 placeholder:text-[8px] placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2 md:py-5 md:text-lg md:placeholder:text-lg md:placeholder:font-medium"
              placeholder="Cari Nama Usaha atau Pemilik"
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
                  <p>Semua</p>
                  <ChevronDown />
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
        <VerificationTable data={verif} onBayar={() => setOpenScan(true)} />
      </div>
      <Dialog open={openScan} onOpenChange={setOpenScan}>
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 flex flex-col gap-2 rounded-t-[28px] bg-green-50 px-4 py-6 shadow-[0px_20px_10px_0px_black] md:px-13">
            <p className="text-[18px] font-bold md:text-3xl">
              Detail Verifikasi
            </p>
            <p className="text-[8px] font-medium md:text-[16px]">SUP-101</p>
          </DialogTitle>
          <VerifModal />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AdminVerifikasiSection;
