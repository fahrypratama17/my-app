import Image from "next/image";
import { Button } from "@/shared/component/ui/button";

const CTASection = () => {
  return (
    <section className="relative pt-40 pb-40">
      <Image
        className="z-0 w-[85%] object-cover"
        src={"/images/cta-1.jpg"}
        alt={"bg"}
        fill
      />

      <div className="absolute inset-0 z-10 bg-[#B999253D]"></div>

      <div className="relative z-20 mx-auto w-[73%] rounded-[40px] bg-linear-to-br from-green-900/70 via-green-400/70 to-green-400/70 p-20 shadow-[12px_12px_0px_0px_#0f301080]">
        <div className="mx-auto flex w-178.25 flex-col gap-5">
          <h1 className="text-center text-5xl font-bold text-white">
            Optimalkan Operasional Dapur SPPG Sekarang!
          </h1>
          <p className="w-[90%] text-center text-lg font-medium text-white">
            Bergabunglah dengan ekosistem digital Pangantara dan rasakan
            kemudahan dalam setiap pengadaan.
          </p>
          <div className="mx-auto mt-10 grid grid-cols-2 gap-4">
            <Button className="rounded-[20px] bg-orange-600 p-2 px-10 py-6 text-center text-[20px] font-bold text-green-50">
              Daftar SPPG Anda
            </Button>
            <Button className="rounded-[20px] bg-green-50 p-2 px-20 py-6 text-center text-[20px] font-bold text-orange-900">
              Daftar Mitra
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
