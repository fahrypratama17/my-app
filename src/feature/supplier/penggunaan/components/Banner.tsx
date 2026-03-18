import { Card, CardContent } from "@/shared/component/ui/card";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="my-40 h-95 bg-green-700">
      <Card className="mx-auto h-full w-[42%] rounded-[0px] border-2 border-green-900">
        <CardContent className="flex flex-col gap-8 py-8">
          <h1 className="text-6xl-bold text-center text-green-800">
            Cara Kerja
          </h1>
          <div className="mx-auto flex w-[95%] gap-6 rounded-[100px] border-2 border-green-900 bg-white px-10 shadow-[6px_6px_0px_0px_var(--color-green-900)]">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={54.108097076416016}
              height={60.87163162231445}
            />
            <p className="text-6xl-bold py-4 text-green-400">
              PANGAN<span className="text-orange-600">TARA</span>
            </p>
          </div>
          <p className="text-xl-medium text-center text-green-900">
            Proses kolaborasi antara SPPG dan supplier dalam memastikan
            distribusi bahan pangan berjalan lancar.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Banner;
