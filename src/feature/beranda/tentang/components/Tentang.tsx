"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { TentangPangantaraData } from "@/feature/beranda/tentang/data/data";
import { useState } from "react";

const Tentang = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TentangPangantaraData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TentangPangantaraData.length - 1 : prev - 1,
    );
  };

  const activeItem = TentangPangantaraData[activeIndex];

  return (
    <section>
      <div className="mx-auto mt-12 w-[90%] rounded-[20px] bg-linear-to-r from-green-900 to-green-400 p-1 md:mt-20 md:w-[60%]">
        <div className="rounded-[16px] bg-green-50 px-7 py-8 text-center md:px-14 md:py-20">
          <div className="mb-5 flex justify-center gap-1">
            {TentangPangantaraData.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-2xl md:h-2.5 ${index === activeIndex ? "w-9 bg-orange-500 md:w-13.25" : "w-1.5 bg-green-500 md:w-2.5"}`}
              ></div>
            ))}
          </div>

          <p className="text-[10px] font-medium md:px-13 md:text-xl">
            {activeItem.desc}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-8 pb-2 md:py-18 md:pb-20">
        <div
          onClick={handlePrev}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-orange-50 text-green-900 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:bg-green-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none md:h-12 md:w-12"
        >
          <ArrowLeft size={30} className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div
          onClick={handleNext}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-orange-50 text-green-900 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:bg-green-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none md:h-12 md:w-12"
        >
          <ArrowRight size={30} className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </div>
    </section>
  );
};

export default Tentang;
