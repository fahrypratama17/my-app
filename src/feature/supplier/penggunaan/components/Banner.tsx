import { Card, CardContent } from "@/shared/component/ui/card";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="my-10 mt-40 h-auto bg-green-700 md:my-40">
      <Card className="mx-auto h-full w-[60%] rounded-none border-2 border-green-900 md:w-[42%]">
        <CardContent className="flex flex-col gap-4 py-2 md:gap-8 md:py-8">
          <h1 className="text-center text-[20px] font-bold text-green-800 md:text-6xl">
            Cara Kerja
          </h1>
          <div className="mx-auto flex w-full items-center justify-center gap-2 rounded-[100px] border-2 border-green-900 bg-white shadow-[3px_3px_0px_0px_var(--color-green-900)] md:gap-6 md:shadow-[6px_6px_0px_0px_var(--color-green-900)]">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={54.108097076416016}
              height={60.87163162231445}
              className="h-4 w-4 md:h-15 md:w-13"
            />
            <p className="text-[20px] font-bold text-green-400 md:py-4 md:text-6xl">
              PANGAN<span className="text-orange-600">TARA</span>
            </p>
          </div>
          <p className="text-center text-[8px] font-medium text-green-900 md:text-xl">
            Proses kolaborasi antara SPPG dan supplier dalam memastikan
            distribusi bahan pangan berjalan lancar.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Banner;
