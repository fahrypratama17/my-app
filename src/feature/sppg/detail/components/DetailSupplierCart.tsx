"use client";

import DaftarPesananCard from "@/feature/sppg/detail/components/DaftarPesananCard";
import RincianPesananCard from "@/feature/sppg/detail/components/RincianPemesananCard";
import { useDetailSupplierSectionContext } from "@/feature/sppg/detail/components/DetailSupplierSectionProvider";

const DetailSupplierCart = () => {
  const {
    cartOpened,
    selectedItems,
    formatCurrency,
    showAllOrderItems,
    setShowAllOrderItems,
    setOpenScan,
    subtotal,
    shippingCost,
    tax,
    total,
  } = useDetailSupplierSectionContext();

  if (!cartOpened) return null;

  return (
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
  );
};

export default DetailSupplierCart;
