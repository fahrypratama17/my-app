import Mitra from "@/feature/beranda/penggunaan/components/Mitra";
import SPPG from "@/feature/beranda/penggunaan/components/SPPG";
import { Button } from "@/shared/component/ui/button";
import { ArrowRight } from "lucide-react";

const PenggunaanSection = () => {
  return (
    <div className="rounded-t-[100px]">
      <div className="flex items-center gap-4 pt-20">
        <div className="h-6 w-full rounded-r-2xl bg-green-900"></div>
        <div className="w-165 text-center text-7xl font-bold text-green-800">
          Alur <span className="font-bold text-orange-500">Singkat</span>
        </div>
        <div className="h-6 w-40 rounded-l-2xl bg-green-900"></div>
      </div>
      <Mitra />
      <SPPG />
      <div className="mb-15 flex items-center justify-center">
        <Button className="cursor-pointer rounded-[21px] border-2 border-orange-900 bg-orange-600 px-8 py-6 shadow-[8px_8px_0px_0px_#0f301040]">
          <p className="py-4 text-[21px] font-semibold">
            Pelajari lebih lengkap
          </p>
          <div className="rounded-full bg-orange-900 p-2">
            <ArrowRight size={30} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PenggunaanSection;
