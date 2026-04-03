"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { SupplierData } from "@/feature/sppg/cari/data/data";
import CariCard from "@/feature/sppg/cari/components/CariCard";
import CariCardSkeleton from "@/feature/sppg/cari/components/CariCardSkeleton";
import { Button } from "@/shared/component/ui/button";
import { ChevronDown } from "lucide-react";

const QUERY_KEY = "kategori";
const SHOW_QUERY_KEY = "show";
const INITIAL_BATCH = 9;

const CariSupplierGrid = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const selectedCategory = searchParams.get(QUERY_KEY);
  const showAll = searchParams.get(SHOW_QUERY_KEY) === "all";

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSuppliers = useMemo(() => {
    if (!selectedCategory) return SupplierData;

    return SupplierData.filter((item) =>
      item.category.some(
        (cat) => cat.toLowerCase() === selectedCategory.toLowerCase(),
      ),
    );
  }, [selectedCategory]);

  const displayed = showAll
    ? filteredSuppliers
    : filteredSuppliers.slice(0, INITIAL_BATCH);
  const hasMore = displayed.length < filteredSuppliers.length;

  return (
    <>
      <div className="mx-auto w-[90%] md:w-[85%]">
        <ScrollArea
          type="always"
          className="h-100 pr-1 **:data-[slot=scroll-area-scrollbar]:rounded-full **:data-[slot=scroll-area-scrollbar]:bg-green-100 **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700 md:h-200 md:pr-8"
        >
          <div className="pr-6 pb-6">
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-6 md:gap-y-16">
              {isInitialLoading &&
                Array.from({ length: INITIAL_BATCH }).map((_, index) => (
                  <CariCardSkeleton key={`initial-skeleton-${index}`} />
                ))}

              {!isInitialLoading &&
                displayed.map((item) => (
                  <CariCard
                    key={item.id}
                    title={item.title}
                    address={item.address}
                    category={item.category}
                  />
                ))}

              {!isInitialLoading && displayed.length === 0 && (
                <div className="col-span-2 rounded-2xl border-2 border-dashed border-green-800 bg-white p-6 text-center text-sm font-semibold text-green-900 md:col-span-3 md:text-lg">
                  Tidak ada supplier untuk kategori ini.
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>

      {!isInitialLoading && hasMore && (
        <div className="mx-auto mt-10 mb-10 w-[90%] md:mt-20 md:mb-20 md:w-[85%]">
          <Button
            className="flex w-[50%] cursor-pointer items-center justify-center rounded-[40px] bg-green-500 py-3 hover:scale-105 md:w-[25%] md:py-6"
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set(SHOW_QUERY_KEY, "all");
              const next = params.toString();
              router.replace(next ? `${pathname}?${next}` : pathname);
            }}
          >
            <p className="text-[8px] font-bold md:text-xl">
              Tampilkan semuanya
            </p>
            <ChevronDown className="h-3 w-3 md:h-12 md:w-12" />
          </Button>
        </div>
      )}
    </>
  );
};

export default CariSupplierGrid;
