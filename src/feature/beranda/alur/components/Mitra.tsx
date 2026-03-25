"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/shared/component/ui/card";

const Mitra = () => {
  const isMobile = useIsMobile();

  return (
    <Card className="mx-auto mt-10 mb-10 flex w-[90%] items-center justify-center gap-6 rounded-[28px] border-2 border-green-800 p-0 md:mt-20 md:mb-20 md:w-[85%] md:rounded-[100px] md:border-4 md:py-8">
      <div className="px-4 py-2 pb-4 md:px-20 md:py-5 md:pb-0">
        <div className="flex items-center justify-center pt-6">
          <p className="inline rounded-[100px] border border-green-800 px-4 py-1 text-[12px] font-semibold text-green-800 md:border-3 md:px-12 md:py-2 md:text-4xl">
            Alur untuk <span className="text-orange-600">Mitra</span>
          </p>
        </div>

        <div className="mt-5 flex w-full flex-col items-start gap-2 md:mt-15 md:gap-8">
          <div className="mx-auto grid grid-cols-[0.5fr_2.0fr_0.5fr_2.5fr_0.5fr] items-center md:grid-cols-[1fr_2.5fr_0.5fr_2.5fr_1fr] md:px-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900 md:h-30 md:w-30">
              <p className="text-[20px] font-bold text-white md:text-7xl">01</p>
            </div>

            <div className="h-px w-full bg-black md:h-1"></div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900 md:h-30 md:w-30">
              <p className="text-[20px] font-bold text-white md:text-7xl">02</p>
            </div>

            <div className="h-px w-full bg-black md:h-1"></div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900 md:h-30 md:w-30">
              <p className="text-[20px] font-bold text-white md:text-7xl">03</p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-[1.2fr_1.5fr_1fr] items-start gap-4 md:grid-cols-[1.2fr_1.1fr_1fr] md:gap-20">
            <div className="flex w-full flex-col justify-center gap-3 rounded-2xl md:w-[90%] md:gap-6">
              <p className="text-start text-[10px] font-bold text-green-900 md:text-2xl">
                Pendaftaran & Verifikasi Mitra
              </p>
              <p className="text-[8px] font-medium text-green-900 md:text-[16px]">
                {isMobile
                  ? "Mitra mendaftar di platform Pangantara dan mengikuti sesi verifikasi online."
                  : "Mitra mendaftar di platform Pangantara dan mengikuti sesi verifikasi online dengan tim untuk memastikan kelayakan serta standar kualitas."}
              </p>
            </div>

            <div className="flex w-full flex-col justify-center gap-3 rounded-2xl pl-4 md:gap-6 md:pl-0">
              <p className="text-start text-[10px] font-bold text-green-900 md:text-2xl">
                Mengunggah Produk
              </p>
              <p className="text-[8px] font-medium text-green-900 md:text-[16px]">
                {isMobile
                  ? "Setelah dinyatakan lolos verifikasi, mitra dapat mengunggah bahan pangan yang dijual."
                  : "Setelah dinyatakan lolos verifikasi, mitra dapat mengunggah bahan pangan yang dijual lengkap dengan harga, deskripsi, spesifikasi, dan ketersediaan stok."}
              </p>
            </div>

            <div className="flex w-full flex-col justify-center gap-3 rounded-2xl pl-4 md:gap-6 md:pl-0">
              <p className="text-start text-[10px] font-bold text-green-900 md:text-2xl">
                Menerima Pesanan
              </p>
              <p className="text-[8px] font-medium text-green-900 md:text-[16px]">
                Mitra dapat menerima pesanan dari SPPG dan mengirimkan bahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Mitra;
