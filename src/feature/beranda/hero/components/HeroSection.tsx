import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="beranda" className="relative w-full max-w-[100%]">
      <Image
        className="z-0 w-[85%] object-cover"
        src={"/images/beranda-1.png"}
        alt={"bg"}
        fill
      />
      <div className="relative z-10 mx-auto grid w-[80%] grid-cols-[1fr_0.8fr]">
        <div className="flex h-[110vh] w-[90%] items-center justify-center">
          <div className="flex flex-col items-start gap-6">
            <div className="flex w-full gap-6 rounded-[100px] border-2 border-green-900 bg-white px-10 shadow-[6px_6px_0px_0px_var(--color-green-900)]">
              <Image
                src="logo/logo.svg"
                alt="Logo"
                width={54.108097076416016}
                height={60.87163162231445}
              />
              <p className="text-[60px] font-bold text-green-400">
                PANGAN<span className="text-orange-600">TARA</span>
              </p>
            </div>
            <div className="space-y-14">
              <p className="w-[90%] text-[21px] font-medium text-white">
                Platform penghubung <span className="font-bold">SPPG</span> dan{" "}
                <span className="font-bold">supplier</span> untuk pengadaan
                bahan pangan MBG yang{" "}
                <span className="font-bold">
                  lebih mudah, transparan, dan terstandar.
                </span>
              </p>
              <Link
                href={""}
                className="flex w-[45%] items-center justify-center gap-4 rounded-[24px] border-2 border-orange-900 bg-orange-600 px-[20px] py-[12px] font-semibold text-white"
              >
                <h1>Pelajari alur</h1>
                <div className="rounded-full bg-orange-900 p-2 font-bold">
                  <MoveUpRight width={15} height={15} strokeWidth={2} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
