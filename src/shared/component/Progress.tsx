"use client";

import { useFormStore } from "@/shared/store/useFormStore";
import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";

const Progress = () => {
  const step = useFormStore((state) => state.step);

  const getCircle = (currentStep: number) => {
    if (step >= currentStep) {
      return "bg-orange-600 text-orange-50";
    }
    return "bg-orange-100 text-orange-500";
  };

  const getLine = (currentStep: number) => {
    if (step > currentStep) {
      return "bg-green-600";
    }
    return "bg-green-200";
  };

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader>
        <p className="text-xl-bold text-orange-900">Langkah {step} dari 3</p>
      </CardHeader>
      <CardContent className="flex flex-col">
        <h1 className="text-3xl-bold text-green-900">
          Menjadi Mitra Profesional
        </h1>
        <div className="mt-15 flex w-full flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center px-4">
            <div
              className={`mr-6 flex h-16 w-16 items-center justify-center rounded-full ${getCircle(1)}`}
            >
              <p className="text-3xl-bold">1</p>
            </div>

            <div className={`h-1 w-80 ${getLine(1)}`} />

            <div
              className={`mx-6 flex h-16 w-16 items-center justify-center rounded-full ${getCircle(2)}`}
            >
              <p className="text-3xl-bold">2</p>
            </div>

            <div className={`h-1 w-80 ${getLine(2)}`} />

            <div
              className={`ml-6 flex h-16 w-16 items-center justify-center rounded-full ${getCircle(3)}`}
            >
              <p className="text-3xl-bold">3</p>
            </div>
          </div>

          <div className="text-lg-bold flex items-start justify-center gap-56">
            <p className={step >= 1 ? "text-green-800" : "text-green-200"}>
              Informasi Umum Supplier
            </p>
            <p className={step >= 2 ? "text-green-800" : "text-green-200"}>
              Kategori Bahan Pangan
            </p>
            <p className={step >= 3 ? "text-green-800" : "text-green-200"}>
              Verifikasi Produk Kategori
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Progress;
