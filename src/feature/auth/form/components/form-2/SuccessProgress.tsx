"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/shared/component/ui/card";

const SuccessProgress = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 3) return prev;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCircleStyle = (step: number) => {
    return step <= activeStep
      ? "bg-orange-600 text-orange-50"
      : "bg-orange-200 text-orange-50";
  };

  return (
    <Card className="w-full border border-green-900 bg-orange-50">
      <CardContent className="flex flex-col gap-1 md:gap-2">
        <div className="flex items-center gap-4">
          <p className="rounded-full bg-orange-600 p-1.5 px-2.5 text-[8px] font-bold text-orange-50 md:p-2 md:px-3.5 md:text-[12px]">
            1
          </p>
          <p className="text-[8px] font-bold text-green-900 md:text-sm">
            Pengajuan Berhasil
          </p>
        </div>
        <div className="ml-2.5 h-4 w-0.5 bg-green-900 md:ml-4 md:h-4" />
        <div className="flex items-center gap-4">
          <p
            className={`rounded-full p-1.5 px-2.5 text-[8px] font-bold transition-all duration-500 md:p-2 md:px-3.5 md:text-[12px] ${getCircleStyle(2)}`}
          >
            2
          </p>
          <p className="text-[8px] font-bold text-green-900 md:text-sm">
            Proses Peninjauan Internal
          </p>
        </div>
        <div className="ml-2.5 h-4 w-0.5 bg-green-900 md:ml-4 md:h-4" />
        <div className="flex items-center gap-4">
          <p
            className={`rounded-full p-1.5 px-2.5 text-[8px] font-bold transition-all duration-500 md:p-2 md:px-3.5 md:text-[12px] ${getCircleStyle(3)}`}
          >
            3
          </p>
          <p className="text-[8px] font-bold text-green-900 md:text-sm">
            Aktivasi Akun Kemitraan
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessProgress;
