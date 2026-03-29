import { Card, CardContent } from "@/shared/component/ui/card";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";
import { House } from "lucide-react";

const BerhasilBayarSection = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-green-50 md:h-[130vh]">
      <Card className="mx-auto w-[90%] border-3 border-green-900 md:w-[40%]">
        <CardContent className="flex flex-col items-center gap-6 px-12 pb-6 md:gap-12">
          <div className="flex flex-col items-center gap-1">
            <div className="w-[90%] md:w-[50%]">
              <video autoPlay muted playsInline className="mx-auto">
                <source src="/animation/check.webm" type="video/webm" />
              </video>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <p className="text-center text-[18px] font-bold text-green-700 md:text-2xl">
                Pesanan berhasil!
              </p>
              <p className="text-center text-[12px] font-medium text-green-500 md:text-sm">
                Terima kasih telah mempercayai layanan kami!
              </p>
              <p className="rounded-[32px] bg-green-50 px-2 py-2 text-[10px] font-bold text-green-600 md:px-4 md:text-sm">
                Order ID: <span className="text-green-900">#ORD-MBG-7729</span>
              </p>
            </div>
          </div>
          <div className="h-auto w-[90%] rounded-[24px] md:w-[70%]">
            <video
              autoPlay
              muted
              playsInline
              className="mx-auto w-full rounded-[24px]"
            >
              <source src="/animation/paymet-success.webm" type="video/webm" />
            </video>
          </div>
          <Link href="/" className="block w-full">
            <Button className="group relative w-full cursor-pointer overflow-hidden rounded-[8px] border border-green-900 bg-orange-100 py-4 text-[12px] font-bold text-green-800 transition-all duration-300 md:py-6 md:text-xl">
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

              <div className="flex items-center gap-2 md:gap-8">
                <p className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Kembali ke Beranda
                </p>

                <House className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
              </div>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default BerhasilBayarSection;
