"use client";

import { useFormStore } from "@/shared/store/useFormStore";
import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";

const Progress = () => {
  const step = useFormStore((state) => state.step);

  const getCircle = (currentStep: number) => {
    if (step >= currentStep) {
      return "bg-orange-600 text-orange-50";
    }
    return "bg-orange-50 text-orange-500";
  };

  const getLine = (currentStep: number) => {
    if (step > currentStep) {
      return "bg-green-600";
    }
    return "bg-green-200";
  };

  return (
    <Card className="gap-2 border-2 border-green-900 bg-green-50 px-4 py-4 md:gap-5 md:px-12 md:py-8">
      <CardHeader>
        <p className="text-[10px] font-bold text-orange-900 md:text-xl">
          Langkah {step} dari 3
        </p>
      </CardHeader>
      <CardContent className="flex flex-col">
        <h1 className="text-[12px] font-bold text-green-900 md:text-3xl">
          Menjadi Mitra Profesional
        </h1>
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 md:mt-15">
          <div className="grid w-full grid-cols-[0.5fr_1fr_0fr_1fr_0.5fr] items-center justify-center gap-4 text-end">
            <div
              className={`ml-auto flex h-6 w-6 items-center justify-center rounded-full md:h-16 md:w-16 ${getCircle(1)}`}
            >
              <p className="text-[10px] font-bold md:text-3xl">1</p>
            </div>

            <div
              className={`mx-auto h-0.5 w-[90%] md:h-1 md:w-full ${getLine(1)}`}
            />

            <div
              className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full md:h-16 md:w-16 ${getCircle(2)}`}
            >
              <p className="text-[10px] font-bold md:text-3xl">2</p>
            </div>

            <div
              className={`mx-auto h-0.5 w-[90%] md:h-1 md:w-full ${getLine(2)}`}
            />

            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full md:h-16 md:w-16 ${getCircle(3)}`}
            >
              <p className="text-[10px] font-bold md:text-3xl">3</p>
            </div>
          </div>

          <div className="grid w-[95%] grid-cols-3 justify-center text-[8px] font-bold md:text-lg">
            <p
              className={`text-start ${step >= 1 ? "text-green-800" : "text-green-200"}`}
            >
              Informasi Umum Supplier
            </p>
            <p
              className={`text-center ${step >= 2 ? "text-green-800" : "text-green-200"}`}
            >
              Kategori Bahan Pangan
            </p>
            <p
              className={`text-end ${step >= 3 ? "text-green-800" : "text-green-200"}`}
            >
              Verifikasi Produk Kategori
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Progress;
