import CariCategoryFilter from "@/feature/sppg/cari/components/CariCategoryFilter";
import CariSupplierGrid from "@/feature/sppg/cari/components/CariSupplierGrid";

const CariSection = () => {
  return (
    <section className="mt-40">
      <CariCategoryFilter />

      <div className="mt-15 w-full rounded-t-[56px] border-t-4 border-green-900 bg-green-50 py-12 md:mt-30 md:rounded-t-[100px] md:py-20">
        <div className="mx-auto mb-10 w-[90%] md:mb-20 md:w-[85%]">
          <div className="max-w-[60%] rounded-[40px] border-2 border-green-900 bg-white p-3 px-6 md:max-w-[35%]">
            <h1 className="text-center text-[12px] font-bold text-green-900 md:text-4xl">
              Supplier Terpopuler
            </h1>
          </div>
        </div>

        <CariSupplierGrid />
      </div>
    </section>
  );
};

export default CariSection;
