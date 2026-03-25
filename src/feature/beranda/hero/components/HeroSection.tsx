"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import * as variants from "@/shared/animation/animation";
import { fadeIn, fadeInUp } from "@/shared/animation/animation";

const HeroSection = () => {
  return (
    <motion.section
      id="beranda"
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-full bg-[url(/images/beranda-1.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto grid w-[90%] grid-cols-[1fr_0.8fr] md:w-[80%]">
        <div className="flex min-h-[50vh] w-[90%] items-center justify-center md:h-[110vh]">
          <div className="flex flex-col items-start gap-6">
            <motion.div
              variants={fadeInUp}
              className="flex w-full items-center justify-center gap-1 rounded-[100px] border-2 border-green-900 bg-white/76 py-0 shadow-[3px_3px_0px_0px_var(--color-green-900)] md:shadow-[6px_6px_0px_0px_var(--color-green-900)] lg:gap-6"
            >
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={0}
                height={0}
                className="h-auto w-[clamp(16px,4vw,54px)]"
              />
              <p className="py-2 text-[16px] font-bold text-green-400 md:py-4 md:text-6xl">
                PANGAN<span className="text-orange-600">TARA</span>
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full space-y-4 md:space-y-14"
            >
              <p className="text-[10px] leading-4 font-medium text-white md:w-[90%] md:text-xl md:leading-8">
                Platform penghubung{" "}
                <span className="text-[10px] md:text-xl md:font-bold">
                  SPPG
                </span>{" "}
                dan{" "}
                <span className="text-[10px] md:text-xl md:font-bold">
                  supplier
                </span>{" "}
                untuk pengadaan bahan pangan MBG yang{" "}
                <span className="text-[10px] md:text-xl md:font-bold">
                  lebih mudah, transparan, dan terstandar.
                </span>
              </p>
              <a
                href={"/#alur"}
                className="group relative flex w-[70%] items-center justify-center gap-4 overflow-hidden rounded-[24px] border-2 border-orange-900 bg-orange-200 py-1 font-semibold text-orange-900 transition-transform duration-300 hover:scale-105 md:w-[35%]"
              >
                <h1 className="relative z-10 text-[10px] transition-colors duration-300 group-hover:text-white md:text-lg">
                  Pelajari alur
                </h1>

                <div className="relative z-10 rounded-full bg-orange-900 p-1 font-bold transition-colors duration-300 md:p-2">
                  <MoveUpRight
                    strokeWidth={2}
                    className="h-3 w-3 text-white transition-colors duration-300 md:h-4 md:w-4 lg:h-5 lg:w-5"
                  />
                </div>

                {/* BACKGROUND ANIMATION */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-start"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-6">
              <Image
                src={"/images/hero-1.png"}
                alt={"hero-1"}
                width={249}
                height={279}
                className="aspect-249/279"
              />
              <Image
                src={"/images/hero-2.png"}
                alt={"hero-2"}
                width={249}
                height={198}
                className="aspect-249/279"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={"/images/hero-3.png"}
                alt={"hero-3"}
                width={249}
                height={349}
                className="aspect-249/279"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
