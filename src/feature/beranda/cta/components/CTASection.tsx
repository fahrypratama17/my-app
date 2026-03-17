import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import Link from "next/link";

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
          <h1 className="text-5xl-bold text-center text-white">
            Optimalkan Operasional Dapur SPPG Sekarang!
          </h1>
          <p className="text-lg-medium mx-auto w-[90%] text-center text-white">
            Bergabunglah dengan ekosistem digital Pangantara dan rasakan
            kemudahan dalam setiap pengadaan.
          </p>
          <div className="mx-auto mt-10 grid grid-cols-2 gap-6">
            <Link href="/register">
              <Button className="group relative cursor-pointer overflow-hidden rounded-[20px] border-2 border-orange-900 bg-orange-100 px-14 py-6 text-center text-xl font-bold text-orange-900 hover:border-orange-600">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Daftar SPPG Anda
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Button>
            </Link>

            <Link href="/register">
              <Button className="group relative cursor-pointer overflow-hidden rounded-[20px] border-2 border-green-900 bg-green-50 px-20 py-6 text-center text-xl font-bold text-green-900">
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
