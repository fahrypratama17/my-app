"use client";

import KeranjangButton from "@/feature/sppg/detail/components/KeranjangButton";
import { useDetailSupplierSectionContext } from "@/feature/sppg/detail/components/DetailSupplierSectionProvider";

const DetailSupplierOpenCart = () => {
  const { setCartOpened, canOpenCart } = useDetailSupplierSectionContext();

  return (
    <KeranjangButton
      onClick={() => setCartOpened(true)}
      disabled={!canOpenCart}
    />
  );
};

export default DetailSupplierOpenCart;
