import { ArrowLeft, ArrowRight } from "lucide-react";

const Tentang = () => {
  return (
    <div>
      <div className="mx-auto mt-20 w-[60%] rounded-[20px] bg-linear-to-r from-green-900 to-green-400 p-1">
        <div className="rounded-[16px] bg-green-50 p-20 text-center">
          <div className="mb-5 flex justify-center gap-1">
            <div className="h-2.5 w-13.25 rounded-2xl bg-orange-500"></div>
            <div className="h-2.5 w-2.5 rounded-2xl bg-green-500"></div>
            <div className="h-2.5 w-2.5 rounded-2xl bg-green-500"></div>
          </div>
          <p className="px-13 text-[20px] font-medium">
            Pangantara adalah platform digital yang menghubungkan Satuan
            Pelayanan Pemenuhan Gizi (SPPG) dengan pedagang pasar dan supplier
            lokal untuk mendukung kelancaran distribusi bahan pangan dalam
            program Makan Bergizi Gratis (MBG).
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-18 pb-20">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-white text-green-900 shadow-[4px_4px_0px_0px_#0f301040] hover:bg-green-900 hover:text-white">
          <ArrowLeft size={30} />
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-white text-green-900 shadow-[4px_4px_0px_0px_#0f301040] hover:bg-green-900 hover:text-white">
          <ArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Tentang;
