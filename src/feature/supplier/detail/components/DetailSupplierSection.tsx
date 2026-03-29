"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import DetailSearchBar from "@/feature/supplier/detail/components/DetailSearchBar";
import DetailSupplierCard from "@/feature/supplier/detail/components/DetailSupplierCard";
import { cardDetailData } from "@/feature/supplier/detail/data/data";
import TampilkanButton from "@/feature/supplier/detail/components/TampilkanButton";
import KeranjangButton from "@/feature/supplier/detail/components/KeranjangButton";
import DaftarPesananCard from "@/feature/supplier/detail/components/DaftarPesananCard";
import RincianPesananCard from "@/feature/supplier/detail/components/RincianPemesananCard";
import ScanModal from "@/feature/supplier/cari/components/ScanModal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import { ScrollArea } from "@/shared/component/ui/scroll-area";
import Link from "next/link";

const DetailSupplierSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [openScan, setOpenScan] = useState(false);

  const displayed = showAll ? cardDetailData : cardDetailData.slice(0, 9);

  return (
    <section className="mt-30 md:mt-40">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <Link
          href="/supplier/cari-supplier"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-green-50 p-2 transition-transform duration-200 hover:scale-105 md:h-12 md:w-12"
        >
          <ArrowLeft />
        </Link>
      </div>
      <div className="mt-10 w-full rounded-t-[56px] border-t-4 border-green-900 bg-green-50 py-20 md:rounded-t-[100px]">
        <div className="mx-auto mb-10 w-[90%] md:mb-20 md:w-[85%]">
          <DetailSearchBar />
        </div>
        <div className="mx-auto w-[85%]">
          <ScrollArea
            type="always"
            className="h-100 pr-1 **:data-[slot=scroll-area-scrollbar]:rounded-full **:data-[slot=scroll-area-scrollbar]:bg-green-100 **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700 md:h-200 md:pr-8"
          >
            <div className="pr-6 pb-6">
              <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-6 md:gap-y-16">
                {displayed.map((item) => (
                  <DetailSupplierCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        <div className="mx-auto mt-10 mb-10 flex w-[90%] items-center justify-between md:mt-20 md:mb-20 md:w-[85%]">
          <TampilkanButton
            showAll={showAll}
            onClick={() => setShowAll(!showAll)}
          />

          <KeranjangButton showAll={showAll} onClick={() => setShowAll(true)} />
        </div>

        <div className="mx-auto mt-10 mb-10 flex w-[90%] flex-col items-start gap-12 md:mt-20 md:mb-20 md:grid md:w-[85%] md:grid-cols-[1.5fr_1fr] md:justify-between">
          <DaftarPesananCard />
          <RincianPesananCard onBayar={() => setOpenScan(true)} />
        </div>
      </div>

      <Dialog open={openScan} onOpenChange={setOpenScan}>
        <DialogContent className="mx-auto h-auto rounded-[28px] border-none bg-transparent p-0 shadow-none md:w-full md:max-w-[30%]">
          <DialogTitle className="sr-only">Payment QRIS</DialogTitle>
          <ScanModal />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DetailSupplierSection;
