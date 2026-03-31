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
      <div className="flex flex-col gap-3 rounded-b-[28px] bg-white px-4 py-6 md:gap-15 md:px-13">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center">
            <div className="w-[50%]">
              <p className="text-[8px] font-bold text-green-200 md:text-sm">
                Pemilik
              </p>
              <p className="text-[8px] font-bold text-green-900 md:text-sm">
                Siti Rahayu
              </p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-green-200 md:text-sm">
                No HP
              </p>
              <p className="text-[8px] font-bold text-green-900 md:text-sm">
                +62 859467 342
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[50%]">
              <p className="text-[8px] font-bold text-green-200 md:text-sm">
                Nama Usaha
              </p>
              <p className="text-[8px] font-bold text-green-900 md:text-sm">
                Kebun Nusantara
              </p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-green-200 md:text-sm">
                Alamat
              </p>
              <p className="text-[8px] font-bold text-green-900 md:text-sm">
                Jl. Veteran No. 15
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[50%]">
              <p className="text-[8px] font-bold text-green-200 md:text-sm">
                Total Produk
              </p>
              <p className="text-[8px] font-bold text-green-900 md:text-sm">
                16
              </p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-green-200 md:text-sm">
                Total Pesanan
              </p>
              <p className="text-[8px] font-bold text-green-900 md:text-sm">
                150
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Kategori & Sumber
          </p>
          <div className="flex gap-2 md:gap-4">
            <p className="rounded-[20px] border border-black bg-orange-50 p-1 px-4 text-[8px] font-medium md:text-sm">
              Sayur
            </p>
            <p className="md:text-s rounded-[20px] border border-black bg-orange-50 p-1 px-4 text-[8px] font-medium">
              Buah
            </p>
          </div>
          <p className="text-[8px] font-semibold text-green-200 md:text-sm">
            Sumber: <span className="text-green-900">Petani Lokal</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-4 text-[10px] font-bold text-green-700 md:text-xl"
          >
            <Clock3 className="h-3 w-3 md:h-6 md:w-6" />
            <p>Deskripsi Usaha</p>
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-300 md:h-6 md:w-6 ${isOpen ? "rotate-180" : ""} `}
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
                    <div className="h-5 w-0.5 bg-green-900 md:h-10" />
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                    <div className="h-5 w-0.5 bg-green-900 md:h-10" />
                    <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                    <div className="h-5 w-0.5 bg-green-900 md:h-10" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[8px] font-semibold text-green-200 md:text-sm">
                        20 Maret 2026
                      </p>
                      <p className="text-[8px] font-semibold text-green-700 md:text-sm">
                        Bergabung dengan Mitra
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] font-semibold text-green-200 md:text-sm">
                        29 Maret 2026
                      </p>
                      <p className="text-[8px] font-semibold text-green-700 md:text-sm">
                        Menambahkan 10 produk baru
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] font-semibold text-green-200 md:text-sm">
                        5 April 2026
                      </p>
                      <p className="text-[8px] font-semibold text-green-700 md:text-sm">
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
