import Mitra from "@/feature/beranda/alur/components/Mitra";
import SPPG from "@/feature/beranda/alur/components/SPPG";
import { Button } from "@/shared/component/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AlurSection = () => {
  return (
    <section id="alur" className="rounded-t-[100px]">
      <div className="flex items-center gap-4 pt-20">
        <div className="h-6 w-full rounded-r-2xl bg-green-900"></div>
        <div className="text-7xl-bold w-165 text-center text-green-800">
          Alur <span className="font-bold text-orange-500">Singkat</span>
        </div>
        <div className="h-6 w-40 rounded-l-2xl bg-green-900"></div>
      </div>
      <Mitra />
      <SPPG />
      <Link href="/FAQ" className="mb-15 flex items-center justify-center">
        <Button className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-[24px] border-2 border-orange-900 bg-orange-200 px-8 py-5 shadow-[8px_8px_0px_0px_#0f301040] transition-all duration-150 hover:scale-105 active:translate-x-1 active:translate-y-1 active:shadow-none">
          <p className="relative z-10 py-4 text-xl font-semibold text-orange-900 transition-colors duration-300 group-hover:text-white">
            Pelajari lebih lengkap
          </p>

          <div className="relative z-10 rounded-full bg-orange-900 p-2 transition-colors duration-300">
            <ArrowRight
              size={30}
              className="text-white transition-colors duration-300"
            />
          </div>

          <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </Button>
      </Link>
    </section>
  );
};

export default AlurSection;
