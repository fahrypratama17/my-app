"use client";

import { useState } from "react";
import { Input } from "@/shared/component/ui/input";
import { Plus, ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";
import { cardData } from "@/feature/mitra/produk/data/data";
import CardProduct from "@/feature/mitra/produk/components/CardProduct";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import AddProductModal from "@/feature/mitra/produk/components/AddProductModal";
import EditProductModal from "@/feature/mitra/produk/components/EditProductModal";
import DeleteProductModal from "@/feature/mitra/produk/components/DeleteProductModal";

const MitraProductSection = () => {
  const [openTambah, setOpenTambah] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="flex w-[90%] items-center justify-between px-12 py-7">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Mitra
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-13 w-13 rounded-full bg-orange-600"></div>
            <div>
              <p className="text-xl-bold text-green-800">Tani Jaya Makmur</p>
              <p className="text-sm-semibold text-green-400">Sup - 101</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[85%] flex-col items-start justify-between gap-12 px-12 py-7">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2 text-green-700">
            <h2 className="text-4xl-bold">Produk Saya</h2>
            <p className="text-lg-medium">
              Kelola semua produk yang Anda jual di platform.
            </p>
          </div>
          <Button
            onClick={() => setOpenTambah(!openTambah)}
            className="mt-auto cursor-pointer rounded-[12px] border border-green-900 bg-green-50 px-6 py-5 hover:scale-105"
          >
            <div className="rounded-[8px] bg-orange-600 p-1">
              <Plus />
            </div>
            <p className="text-[18px] font-bold text-green-700">
              Tambah Produk Baru
            </p>
          </Button>
        </div>

        <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
          <div className="relative w-full">
            <Input
              className="peer border-2 border-green-900 bg-white transition-all duration-200 placeholder:font-medium placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2"
              placeholder="Cari Pesanan"
            />

            <Search className="pointer-events-none absolute top-2.5 left-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100" />
          </div>
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="flex items-center justify-between"
              >
                <Button className="flex h-full w-full cursor-pointer items-center justify-between border-2 border-green-900 bg-transparent text-[#A7A7A7]">
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
        <div className="grid w-full grid-cols-3 gap-20">
          {cardData.map((item) => (
            <CardProduct
              key={item.id}
              data={item}
              onEdit={() => setOpenEdit(!openEdit)}
              onDelete={() => setOpenDelete(!openDelete)}
            />
          ))}
        </div>
      </div>

      <Dialog open={openTambah} onOpenChange={setOpenTambah}>
        <DialogContent className="h-auto w-full max-w-[50%] gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 rounded-t-[28px] bg-green-50 px-13 py-4 shadow-[0px_20px_10px_0px_black]">
            <p className="text-3xl font-bold text-green-700">
              Tambahkan Produk
            </p>
          </DialogTitle>
          <AddProductModal />
        </DialogContent>
      </Dialog>

      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="h-auto w-full max-w-[50%] gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 rounded-t-[28px] bg-green-50 px-13 py-4 shadow-[0px_20px_10px_0px_black]">
            <p className="text-3xl font-bold text-green-700">Edit</p>
          </DialogTitle>
          <EditProductModal />
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="h-auto w-full max-w-[50%] rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="sr-only">
            <p>Edit</p>
          </DialogTitle>
          <DeleteProductModal />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MitraProductSection;
