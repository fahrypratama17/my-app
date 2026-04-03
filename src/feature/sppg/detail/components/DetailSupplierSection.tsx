import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DetailSupplierSectionProvider from "@/feature/sppg/detail/components/DetailSupplierSectionProvider";
import DetailSupplierProducts from "@/feature/sppg/detail/components/DetailSupplierProducts";
import DetailSupplierButton from "@/feature/sppg/detail/components/DetailSupplierButton";
import DetailSupplierCart from "@/feature/sppg/detail/components/DetailSupplierCart";
import DetailSupplierScanDialog from "@/feature/sppg/detail/components/DetailSupplierScanDialog";

const DetailSupplierSection = () => {
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
        <DetailSupplierSectionProvider>
          <DetailSupplierProducts />
          <DetailSupplierButton />
          <DetailSupplierCart />
          <DetailSupplierScanDialog />
        </DetailSupplierSectionProvider>
      </div>
    </section>
  );
};

export default DetailSupplierSection;
