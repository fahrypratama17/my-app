"use client";

import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import DetailSearchBar from "@/feature/supplier/detail/components/DetailSearchBar";
import { useState } from "react";
import DetailSupplierCard from "@/feature/supplier/detail/components/DetailSupplierCard";
import { cardDetailData } from "@/feature/supplier/detail/data/data";
import TampilkanButton from "@/feature/supplier/detail/components/TampilkanButton";
import KeranjangButton from "@/feature/supplier/detail/components/KeranjangButton";
import DaftarPesananCard from "@/feature/supplier/detail/components/DaftarPesananCard";
import RincianPesananCard from "@/feature/supplier/detail/components/RincianPemesananCard";

const DetailSupplierSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? cardDetailData : cardDetailData.slice(0, 9);

  return (
    <section className="mt-40">
      <div className="mx-auto w-[85%]">
        <div className="inline-block cursor-pointer rounded-full border-2 border-green-900 bg-green-50 p-2 transition-transform duration-200 hover:scale-105">
          <ArrowLeft />
        </div>
      </div>
      <div className="mt-10 w-full rounded-t-[100px] border-t-4 border-green-900 bg-green-50 py-20">
        <div className="mx-auto mb-20 w-[85%]">
          <DetailSearchBar />
        </div>
        <div className="mx-auto w-[85%]">
          <ScrollArea
            type="always"
            className="h-200 pr-8 **:data-[slot=scroll-area-scrollbar]:rounded-full **:data-[slot=scroll-area-scrollbar]:bg-green-100 **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
          >
            <div className="pr-6 pb-6">
              <div className="grid grid-cols-3 gap-x-6 gap-y-16">
                {displayed.map((item) => (
                  <DetailSupplierCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        <div className="mx-auto mt-20 mb-20 flex w-[85%] items-center justify-between">
          <TampilkanButton
            showAll={showAll}
            onClick={() => setShowAll(!showAll)}
          />
          <KeranjangButton showAll={showAll} onClick={() => setShowAll(true)} />
        </div>

        <div className="mx-auto mt-20 mb-20 grid w-[85%] grid-cols-[1.5fr_1fr] items-start justify-between gap-12">
          <DaftarPesananCard />
          <RincianPesananCard />
        </div>
      </div>
    </section>
  );
};

export default DetailSupplierSection;
