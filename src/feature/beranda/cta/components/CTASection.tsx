import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative mb-10 py-10 md:mb-20 md:py-40">
      <Image
        className="z-0 w-[85%] object-cover"
        src={"/images/cta-1.jpg"}
        alt={"bg"}
        fill
      />

      <div className="absolute inset-0 z-10 bg-[#B999253D]"></div>

      <div className="relative z-20 mx-auto w-[90%] rounded-[40px] bg-linear-to-br from-green-900/70 via-green-400/70 to-green-400/70 p-12 shadow-[6px_6px_0px_0px_#0f301080] md:w-[73%] md:p-20 md:shadow-[12px_12px_0px_0px_#0f301080]">
        <div className="mx-auto flex max-w-95.5 flex-col gap-5 md:max-w-178.25">
          <h1 className="text-center text-[16px] font-bold text-white md:text-5xl">
            Optimalkan Operasional Dapur SPPG Sekarang!
          </h1>
          <p className="mx-auto w-[90%] text-center text-[8px] font-medium text-white md:text-lg">
            Bergabunglah dengan ekosistem digital Pangantara dan rasakan
            kemudahan dalam setiap pengadaan.
          </p>
          <div className="mx-auto grid grid-cols-2 gap-2 md:mt-10 md:gap-6">
            <Link href="/register?type=sppg">
              <Button className="group relative h-6 w-full cursor-pointer overflow-hidden rounded-[20px] border border-orange-900 bg-orange-100 px-4 text-center text-[8px] font-bold text-orange-900 hover:border-orange-600 md:border-2 md:px-14 md:py-6 md:text-xl">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Daftar SPPG Anda
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Button>
            </Link>

            <Link href="/register?type=mitra">
              <Button className="group relative h-6 w-full cursor-pointer overflow-hidden rounded-[20px] border border-green-900 bg-green-50 px-2 text-center text-[8px] font-bold text-green-900 md:border-2 md:px-20 md:py-6 md:text-xl">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Daftar Mitra
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-green-900 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
