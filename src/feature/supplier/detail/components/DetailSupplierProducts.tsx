"use client";

import DetailSearchBar from "@/feature/supplier/detail/components/DetailSearchBar";
import DetailSupplierCard from "@/feature/supplier/detail/components/DetailSupplierCard";
import DetailSupplierCardSkeleton from "@/feature/supplier/detail/components/DetailSupplierCardSkeleton";
import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { useDetailSupplierSectionContext } from "@/feature/supplier/detail/components/DetailSupplierSectionProvider";

const DetailSupplierProducts = () => {
  const {
    isLoadingProducts,
    searchQuery,
    setSearchQuery,
    quantities,
    updateQuantity,
    displayedProducts,
  } = useDetailSupplierSectionContext();

  return (
    <>
      <div className="mx-auto mb-10 w-[90%] md:mb-20 md:w-[85%]">
        <DetailSearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
      <div className="mx-auto w-[85%]">
        <ScrollArea
          type="always"
          className="h-100 pr-1 **:data-[slot=scroll-area-scrollbar]:rounded-full **:data-[slot=scroll-area-scrollbar]:bg-green-100 **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700 md:h-200 md:pr-8"
        >
          <div className="pr-6 pb-6">
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 md:gap-x-6 md:gap-y-16">
              {isLoadingProducts &&
                Array.from({ length: 9 }).map((_, index) => (
                  <DetailSupplierCardSkeleton
                    key={`detail-skeleton-${index}`}
                  />
                ))}

              {!isLoadingProducts &&
                displayedProducts.map((item) => (
                  <DetailSupplierCard
                    key={item.id}
                    data={item}
                    quantity={quantities[item.id] ?? 0}
                    onIncrease={() => updateQuantity(item.id, "inc")}
                    onDecrease={() => updateQuantity(item.id, "dec")}
                  />
                ))}

              {!isLoadingProducts && displayedProducts.length === 0 && (
                <p className="col-span-2 rounded-2xl border-2 border-dashed border-green-800 bg-white p-4 text-center text-sm font-semibold text-green-900 md:col-span-3 md:text-lg">
                  Produk tidak ditemukan.
                </p>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default DetailSupplierProducts;
