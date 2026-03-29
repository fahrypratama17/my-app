import { Card, CardContent } from "@/shared/component/ui/card";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";
import { House } from "lucide-react";

const BerhasilBayarSection = () => {
  return (
    <section className="flex h-[130vh] items-center justify-center bg-green-50">
      <Card className="mx-auto w-[40%] border-3 border-green-900">
        <CardContent className="flex flex-col items-center gap-12 px-12 pb-6">
          <div className="flex flex-col items-center gap-1">
            <div className="w-[50%]">
              <video autoPlay muted playsInline className="mx-auto">
                <source src="/animation/check.webm" type="video/webm" />
              </video>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <p className="text-2xl font-bold text-green-700">
                Pesanan berhasil!
              </p>
              <p className="text-sm font-medium text-green-500">
                Terima kasih telah mempercayai layanan kami!
              </p>
              <p className="text-sm font-bold text-green-600">
                Order ID: <span className="text-green-900">#ORD-MBG-7729</span>
              </p>
            </div>
          </div>
          <div className="h-auto w-[70%] rounded-[24px]">
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
            <Button className="group relative w-full cursor-pointer overflow-hidden border border-green-900 bg-orange-100 py-6 text-xl font-bold text-green-800 transition-all duration-300">
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

              <p className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Kembali ke Beranda
              </p>

              <House className="absolute right-12 z-10 h-8 w-8 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default BerhasilBayarSection;
