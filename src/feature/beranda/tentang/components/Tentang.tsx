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
      <div className="mx-auto mt-20 w-[60%] rounded-[20px] bg-linear-to-r from-green-900 to-green-400 p-1">
        <div className="rounded-[16px] bg-green-50 px-14 py-20 text-center">
          <div className="mb-5 flex justify-center gap-1">
            {TentangPangantaraData.map((_, index) => (
              <div
                key={index}
                className={`h-2.5 rounded-2xl ${index === activeIndex ? "w-13.25 bg-orange-500" : "w-2.5 bg-green-500"}`}
              ></div>
            ))}
          </div>

          <p className="text-xl-medium px-13">{activeItem.desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-18 pb-20">
        <div
          onClick={handlePrev}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-orange-50 text-green-900 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:bg-green-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <ArrowLeft size={30} />
        </div>
        <div
          onClick={handleNext}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-orange-50 text-green-900 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:bg-green-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <ArrowRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Tentang;
