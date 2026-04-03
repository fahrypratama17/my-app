import DetailSupplierToggleProducts from "@/feature/sppg/detail/components/DetailSupplierToggleProducts";
import DetailSupplierOpenCart from "@/feature/sppg/detail/components/DetailSupplierOpenCart";

const DetailSupplierButton = () => {
  return (
    <div className="mx-auto mt-10 mb-10 flex w-[90%] items-center justify-between md:mt-20 md:mb-20 md:w-[85%]">
      <DetailSupplierToggleProducts />
      <DetailSupplierOpenCart />
    </div>
  );
};

export default DetailSupplierButton;
