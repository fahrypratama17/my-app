"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import AddProductModal from "@/feature/mitra/produk/components/AddProductModal";

const MitraProductHeader = () => {
  const [openTambah, setOpenTambah] = useState(false);

  return (
    <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
      <div className="flex flex-col gap-2 text-green-700">
        <h2 className="text-2xl font-bold md:text-4xl">Produk Saya</h2>
        <p className="text-[12px] font-medium md:text-lg">
          Kelola semua produk yang Anda jual di platform.
        </p>
      </div>
      <Button
        onClick={() => setOpenTambah(true)}
        className="mt-auto cursor-pointer rounded-[12px] border border-green-900 bg-green-50 px-3 hover:scale-105 md:px-6 md:py-5"
      >
        <div className="rounded-[8px] bg-orange-600 md:p-1">
          <Plus className="p-1 md:p-0" />
        </div>
        <p className="text-[8px] font-bold text-green-700 md:text-[18px]">
          Tambah Produk Baru
        </p>
      </Button>

      <Dialog open={openTambah} onOpenChange={setOpenTambah}>
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 rounded-t-[28px] bg-green-50 px-4 py-6 shadow-[0px_20px_10px_0px_black] md:px-13">
            <p className="text-[18px] font-bold text-green-700 md:text-3xl">
              Tambahkan Produk
            </p>
          </DialogTitle>
          <AddProductModal />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MitraProductHeader;
