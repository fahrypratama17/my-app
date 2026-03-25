import Mitra from "@/feature/beranda/alur/components/Mitra";
import SPPG from "@/feature/beranda/alur/components/SPPG";
import { Button } from "@/shared/component/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AlurSection = () => {
  return (
    <section id="alur">
      <div className="flex items-center gap-4 md:pt-10">
        <div className="h-3 w-full rounded-r-2xl bg-green-900 md:h-6"></div>
        <div className="w-75 text-center text-[20px] font-bold text-green-800 md:w-165 md:text-7xl">
          Alur <span className="font-bold text-orange-500">Singkat</span>
        </div>
        <div className="h-3 w-20 rounded-l-2xl bg-green-900 md:h-6 md:w-40"></div>
      </div>
      <Mitra />
      <SPPG />
      <Link href="/FAQ" className="mb-15 flex items-center justify-center">
        <Button className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-[24px] border-2 border-orange-900 bg-orange-200 px-4 py-3 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:scale-105 active:translate-x-1 active:translate-y-1 active:shadow-none md:gap-4 md:px-8 md:py-5 md:shadow-[8px_8px_0px_0px_#0f301040]">
          <p className="relative z-10 py-4 text-[12px] font-semibold text-orange-900 transition-colors duration-300 group-hover:text-white md:text-xl">
            Pelajari lebih lengkap
          </p>

          <div className="relative z-10 rounded-full bg-orange-900 p-1 transition-colors duration-300 md:p-2">
            <ArrowRight className="h-2 w-2 text-white transition-colors duration-300 md:h-7.5 md:w-7.5" />
          </div>

          <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </Button>
      </Link>
    </section>
  );
};

export default AlurSection;
