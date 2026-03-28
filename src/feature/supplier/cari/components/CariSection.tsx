"use client";

import { SupplierData } from "@/feature/supplier/cari/data/data";
import Kategori from "@/feature/supplier/cari/components/Kategori";
import CariCard from "@/feature/supplier/cari/components/CariCard";
import { Button } from "@/shared/component/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/shared/component/ui/scroll-area";

const CariSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? SupplierData : SupplierData.slice(0, 9);

  return (
    <section className="mt-40">
      <Kategori />

      <div className="mt-30 w-full rounded-t-[100px] border-t-4 border-green-900 bg-green-50 py-20">
        <div className="mx-auto mb-20 w-[85%]">
          <div className="max-w-[35%] rounded-[40px] border-2 border-green-900 bg-white p-3 px-6">
            <h1 className="text-4xl-bold text-center text-green-900">
              Supplier Terpopuler
            </h1>
          </div>
        </div>
        <div className="mx-auto w-[85%]">
          <ScrollArea
            type="always"
            className="h-200 pr-8 **:data-[slot=scroll-area-scrollbar]:rounded-full **:data-[slot=scroll-area-scrollbar]:bg-green-100 **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
          >
            <div className="pr-6 pb-6">
              <div className="grid grid-cols-3 gap-x-6 gap-y-16">
                {displayed.map((item) => (
                  <CariCard
                    key={item.id}
                    title={item.title}
                    address={item.address}
                    category={item.category}
                  />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {!showAll && (
          <div className="mx-auto mt-20 mb-20 w-[85%]">
            <Button
              className="flex w-[25%] cursor-pointer items-center justify-center rounded-[40px] bg-green-500 py-6 text-xl font-bold hover:scale-105"
              onClick={() => setShowAll(true)}
            >
              <p>Tampilkan lebih banyak</p>
              <ChevronDown className="h-12 w-12" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CariSection;
