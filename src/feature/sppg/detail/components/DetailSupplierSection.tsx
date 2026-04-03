"use client";

import { ArrowLeft } from "lucide-react";
import DetailSearchBar from "@/feature/sppg/detail/components/DetailSearchBar";
import DetailSupplierCard from "@/feature/sppg/detail/components/DetailSupplierCard";
import DetailSupplierCardSkeleton from "@/feature/sppg/detail/components/DetailSupplierCardSkeleton";
import TampilkanButton from "@/feature/sppg/detail/components/TampilkanButton";
import KeranjangButton from "@/feature/sppg/detail/components/KeranjangButton";
import DaftarPesananCard from "@/feature/sppg/detail/components/DaftarPesananCard";
import RincianPesananCard from "@/feature/sppg/detail/components/RincianPemesananCard";
import ScanModal from "@/feature/sppg/cari/components/ScanModal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import { ScrollArea } from "@/shared/component/ui/scroll-area";
import Link from "next/link";
import { useDetailSupplierSection } from "@/feature/sppg/detail/hooks/use-detail-supplier-section";

const DetailSupplierSection = () => {
  const {
    isLoadingProducts,
    searchQuery,
    setSearchQuery,
    showAllProducts,
    setShowAllProducts,
    quantities,
    updateQuantity,
    displayedProducts,
    cartOpened,
    setCartOpened,
    selectedItems,
    subtotal,
    shippingCost,
    tax,
    total,
    formatCurrency,
    openScan,
    setOpenScan,
    canOpenCart,
    showAllOrderItems,
    setShowAllOrderItems,
  } = useDetailSupplierSection();

  return (
    <section className="mt-30 md:mt-40">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <Link
          href="/sppg/cari-supplier"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-green-50 p-2 transition-transform duration-200 hover:scale-105 md:h-12 md:w-12"
        >
          <ArrowLeft />
        </Link>
      </div>
      <div className="mt-10 w-full rounded-t-[56px] border-t-4 border-green-900 bg-green-50 py-20 md:rounded-t-[100px]">
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

        <div className="mx-auto mt-10 mb-10 flex w-[90%] items-center justify-between md:mt-20 md:mb-20 md:w-[85%]">
          <TampilkanButton
            showAll={showAllProducts}
            onClick={() => setShowAllProducts(!showAllProducts)}
          />

          <KeranjangButton
            onClick={() => setCartOpened(true)}
            disabled={!canOpenCart}
          />
        </div>

        {cartOpened && (
          <div className="mx-auto mt-10 mb-10 flex w-[90%] flex-col items-start gap-12 md:mt-20 md:mb-20 md:grid md:w-[85%] md:grid-cols-[1.5fr_1fr] md:justify-between">
            <DaftarPesananCard
              items={selectedItems}
              formatCurrency={formatCurrency}
              showAllItems={showAllOrderItems}
              onToggleShowAll={() => setShowAllOrderItems((prev) => !prev)}
            />
            <RincianPesananCard
              onBayar={() => setOpenScan(true)}
              subtotal={subtotal}
              shippingCost={shippingCost}
              tax={tax}
              total={total}
              formatCurrency={formatCurrency}
            />
          </div>
        )}
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
