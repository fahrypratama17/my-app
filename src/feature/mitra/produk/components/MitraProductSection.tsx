import MitraProductHeader from "@/feature/mitra/produk/components/MitraProductHeader";
import MitraProductFilterBar from "@/feature/mitra/produk/components/MitraProductFilterBar";
import MitraProductGrid from "@/feature/mitra/produk/components/MitraProductGrid";

const MitraProductSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="hidden w-[90%] items-center justify-between px-12 py-7 md:flex">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Mitra
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-13 w-13 rounded-full bg-orange-600"></div>
            <div>
              <p className="text-xl-bold text-green-800">Tani Jaya Makmur</p>
              <p className="text-sm-semibold text-green-400">Sup - 101</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-8 md:mx-0 md:w-[85%] md:gap-12 md:px-12 md:py-7">
        <MitraProductHeader />
        <MitraProductFilterBar />
        <MitraProductGrid />
      </div>
    </section>
  );
};

export default MitraProductSection;
