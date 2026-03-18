"use client";

import { FAQData } from "@/feature/supplier/penggunaan/data/data";
import { Card, CardContent, CardTitle } from "@/shared/component/ui/card";
import { Separator } from "@/shared/component/ui/separator";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="my-30">
      <div className="h-2.5 w-full bg-green-900"></div>
      <h1 className="text-6xl-bold mx-auto w-[40%] pt-10 pb-6 text-center text-green-800">
        <span className="text-orange-600">F</span>requently{" "}
        <span className="text-orange-600">A</span>sk{" "}
        <span className="text-orange-600">Q</span>uestions
      </h1>
      <p className="text-xl-medium mx-auto w-[40%] pb-10 text-center text-green-900">
        Segala hal yang perlu Anda ketahui tentang ekosistem Pangantara.
      </p>
      <div className="h-2.5 w-full bg-green-900"></div>
      <div className="mx-auto my-20 flex w-[80%] flex-col gap-10">
        {FAQData.map((item, index) => {
          const isEven: boolean = index % 2 === 0;
          const isOpen = openId === item.id;

          return (
            <Card
              key={index}
              className={`space-y-4 rounded-[40px] border-2 border-green-900 py-6 ${isEven ? "bg-green-50" : "bg-orange-50"}`}
            >
              <CardTitle
                className="mx-auto flex w-[95%] items-center justify-between"
                onClick={() => handleClick(item.id)}
              >
                <div className="text-xl-bold flex gap-10 text-green-900">
                  <p>0{item.id}</p>
                  <h2>{item.q}</h2>
                </div>
                <div
                  className={`cursor-pointer rounded-full border bg-orange-500 p-4 text-green-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <ChevronUp />
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
                    <CardContent className="mx-auto w-[95%] py-6 text-lg font-medium text-green-900">
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
