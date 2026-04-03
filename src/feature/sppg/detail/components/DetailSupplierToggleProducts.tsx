"use client";

import TampilkanButton from "@/feature/sppg/detail/components/TampilkanButton";
import { useDetailSupplierSectionContext } from "@/feature/sppg/detail/components/DetailSupplierSectionProvider";

const DetailSupplierToggleProducts = () => {
  const { showAllProducts, setShowAllProducts } =
    useDetailSupplierSectionContext();

  return (
    <TampilkanButton
      showAll={showAllProducts}
      onClick={() => setShowAllProducts(!showAllProducts)}
    />
  );
};

export default DetailSupplierToggleProducts;
