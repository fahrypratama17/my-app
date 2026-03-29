"use client";

import { useState } from "react";
import { Clock3, ChevronDown, ChevronUp } from "lucide-react";
import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";

const ManajemenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollArea
      type="always"
      className="max-h-[80vh] w-full overflow-hidden **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
    >
      <div className="flex flex-col gap-15 rounded-b-[28px] bg-white px-13 py-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center">
            <div className="w-[50%]">
              <p className="text-sm font-bold text-green-200">Pemilik</p>
              <p className="text-sm font-bold text-green-900">Siti Rahayu</p>
            </div>
            <div>
              <p className="text-sm font-bold text-green-200">No HP</p>
              <p className="text-sm font-bold text-green-900">+62 859467 342</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[50%]">
              <p className="text-sm font-bold text-green-200">Nama Usaha</p>
              <p className="text-sm font-bold text-green-900">
                Kebun Nusantara
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-green-200">Alamat</p>
              <p className="text-sm font-bold text-green-900">
                Jl. Veteran No. 15
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[50%]">
              <p className="text-sm font-bold text-green-200">Total Produk</p>
              <p className="text-sm font-bold text-green-900">16</p>
            </div>
            <div>
              <p className="text-sm font-bold text-green-200">Total Pesanan</p>
              <p className="text-sm font-bold text-green-900">150</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-green-700">Kategori & Sumber</p>
          <div className="flex gap-4">
            <p className="rounded-[20px] border border-black bg-orange-50 p-1 px-4">
              Sayur
            </p>
            <p className="rounded-[20px] border border-black bg-orange-50 p-1 px-4">
              Buah
            </p>
          </div>
          <p className="text-sm font-semibold text-green-200">
            Sumber: <span className="text-green-900">Petani Lokal</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-4 text-xl font-bold text-green-700"
          >
            <Clock3 />
            <p>Deskripsi Usaha</p>
            <ChevronDown
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""} `}
            />
          </div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                    <div className="h-10 w-0.5 bg-green-900" />
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                    <div className="h-10 w-0.5 bg-green-900" />
                    <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                    <div className="h-10 w-0.5 bg-green-900" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-semibold text-green-200">
                        20 Maret 2026
                      </p>
                      <p className="text-sm font-semibold text-green-700">
                        Bergabung dengan Mitra
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-200">
                        29 Maret 2026
                      </p>
                      <p className="text-sm font-semibold text-green-700">
                        Menambahkan 10 produk baru
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-200">
                        5 April 2026
                      </p>
                      <p className="text-sm font-semibold text-green-700">
                        Menyelesaikan 100 pesanan
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ManajemenModal;
