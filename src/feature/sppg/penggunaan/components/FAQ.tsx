"use client";

import { FAQData } from "@/feature/sppg/penggunaan/data/data";
import { Card, CardContent, CardTitle } from "@/shared/component/ui/card";
import { Separator } from "@/shared/component/ui/separator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="my-15 md:my-30">
      <div className="h-1.5 w-full bg-green-900 md:h-2.5"></div>
      <h1 className="mx-auto w-[50%] pt-4 pb-2 text-center text-[20px] font-bold text-green-800 md:w-[40%] md:pt-10 md:pb-6 md:text-6xl">
        <span className="text-orange-600">F</span>requently{" "}
        <span className="text-orange-600">A</span>sk{" "}
        <span className="text-orange-600">Q</span>uestions
      </h1>
      <p className="mx-auto w-[50%] pb-4 text-center text-[10px] font-medium text-green-900 md:w-[40%] md:pb-10 md:text-xl">
        Segala hal yang perlu Anda ketahui tentang ekosistem Pangantara.
      </p>
      <div className="h-1.5 w-full bg-green-900 md:h-2.5"></div>
      <div className="mx-auto my-10 mb-20 flex w-[90%] flex-col gap-4 md:my-20 md:w-[80%] md:gap-10">
        {FAQData.map((item, index) => {
          const isEven: boolean = index % 2 === 0;
          const isOpen = openId === item.id;

          return (
            <Card
              key={index}
              className={`rounded-[18px] border-2 border-green-900 py-2 md:space-y-4 md:rounded-[40px] md:py-6 ${isEven ? "bg-green-50" : "bg-orange-50"}`}
            >
              <CardTitle
                className="mx-auto flex w-[95%] items-center justify-between"
                onClick={() => handleClick(item.id)}
              >
                <div className="flex gap-4 text-[10px] font-bold text-green-900 md:gap-10 md:text-xl">
                  <p>0{item.id}</p>
                  <h2>{item.q}</h2>
                </div>
                <div
                  className={`cursor-pointer rounded-full border bg-orange-500 p-1 text-green-900 transition-transform duration-300 md:p-4 ${isOpen ? "rotate-180" : ""}`}
                >
                  <ChevronDown className="h-3 w-3 md:h-6 md:w-6" />
                </div>
              </CardTitle>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <Separator className="mx-auto border border-black data-horizontal:w-[95%]" />
                    <CardContent className="mx-auto w-[95%] py-2 text-[8px] font-medium text-green-900 md:py-6 md:text-lg">
                      {item.a}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
