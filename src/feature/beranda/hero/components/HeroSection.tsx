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
      <div className="mx-auto grid w-[80%] grid-cols-[1fr_0.8fr]">
        <div className="flex h-[110vh] w-[90%] items-center justify-center">
          <div className="flex flex-col items-start gap-6">
            <motion.div
              variants={fadeInUp}
              className="flex w-full gap-6 rounded-[100px] border-2 border-green-900 bg-white px-10 shadow-[6px_6px_0px_0px_var(--color-green-900)]"
            >
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={54.108097076416016}
                height={60.87163162231445}
              />
              <p className="text-6xl-bold py-4 text-green-400">
                PANGAN<span className="text-orange-600">TARA</span>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-14">
              <p className="text-xl-medium w-[90%] text-white">
                Platform penghubung <span className="text-xl-bold">SPPG</span>{" "}
                dan <span className="text-xl-bold">supplier</span> untuk
                pengadaan bahan pangan MBG yang{" "}
                <span className="text-xl-bold">
                  lebih mudah, transparan, dan terstandar.
                </span>
              </p>
              <a
                href={"/#alur"}
                className="group relative flex w-[35%] items-center justify-center gap-4 overflow-hidden rounded-[24px] border-2 border-orange-900 bg-orange-200 py-1 font-semibold text-orange-900 transition-transform duration-300 hover:scale-105"
              >
                <h1 className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Pelajari alur
                </h1>

                <div className="relative z-10 rounded-full bg-orange-900 p-2 font-bold transition-colors duration-300">
                  <MoveUpRight
                    width={15}
                    height={15}
                    strokeWidth={2}
                    className="text-white transition-colors duration-300"
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
              />
              <Image
                src={"/images/hero-2.png"}
                alt={"hero-2"}
                width={249}
                height={198}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={"/images/hero-3.png"}
                alt={"hero-3"}
                width={249}
                height={349}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
