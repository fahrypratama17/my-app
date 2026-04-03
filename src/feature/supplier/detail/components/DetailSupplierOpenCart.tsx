"use client";

import KeranjangButton from "@/feature/supplier/detail/components/KeranjangButton";
import { useDetailSupplierSectionContext } from "@/feature/supplier/detail/components/DetailSupplierSectionProvider";

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
