"use client";

import { useState } from "react";
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
import VerificationTable from "@/feature/cms/verifikasi/components/VerificationTable";
import { verif } from "@/feature/cms/verifikasi/data/data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import VerifModal from "@/feature/cms/verifikasi/components/VerifModal";

const AdminVerifikasiSection = () => {
  const [openScan, setOpenScan] = useState(false);

  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="flex w-[90%] items-center justify-between px-12 py-7">
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
      <div className="flex w-[85%] flex-col items-start justify-between gap-12 px-12 py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-4xl-bold">Verifikasi Mitra</h2>
          <p className="text-lg-medium">
            Kelola dan verifikasi pendaftaran mitra baru di platform PANGANTARA.
          </p>
        </div>
        <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
          <div className="relative w-full">
            <Input
              className="peer border-2 border-green-900 bg-white transition-all duration-200 placeholder:font-medium placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2"
              placeholder="Cari Nama Usaha atau Pemilik"
            />

            <Search className="pointer-events-none absolute top-2.5 left-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100" />
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
        <VerificationTable data={verif} onBayar={() => setOpenScan(true)} />
      </div>
      <Dialog open={openScan} onOpenChange={setOpenScan}>
        <DialogContent className="h-auto w-full max-w-[50%] gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 flex flex-col gap-2 rounded-t-[28px] bg-green-50 px-13 py-4 shadow-[0px_20px_10px_0px_black]">
            <p className="text-3xl font-bold">Detail Verifikasi</p>
            <p className="text-md font-medium">SUP-101</p>
          </DialogTitle>
          <VerifModal />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AdminVerifikasiSection;
