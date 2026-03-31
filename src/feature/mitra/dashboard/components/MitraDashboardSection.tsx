import { Store, Banknote, ShoppingCart, ArrowRight } from "lucide-react";
import CardProductActive from "@/feature/mitra/dashboard/components/CardProductActive";
import MitraTable from "@/feature/mitra/dashboard/components/MitraTable";
import { mitraData } from "@/feature/mitra/dashboard/data/data";
import CardIncome from "@/feature/mitra/dashboard/components/CardIncome";
import CardNew from "@/feature/mitra/dashboard/components/CardNew";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";
import DashboardCardMobile from "@/feature/mitra/dashboard/components/DashboardCardMobile";

const cardProductData = [
  {
    title: "Total Produk Aktif",
    value: 24,
    icon: <Store className="h-3 w-3 md:h-7.5 md:w-7.5" />,
  },
];

const cardIncomeData = [
  {
    title: "Total Pendapatan",
    value: "Rp 1.989.000",
    icon: <Banknote className="h-3 w-3 md:h-7.5 md:w-7.5" />,
  },
];

const cardNewData = [
  {
    value: 3,
  },
];

const MitraDashboardSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="hidden w-[90%] items-center justify-between px-12 py-7 md:flex">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Mitra
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-13 w-13 rounded-full bg-orange-600"></div>
            <div>
              <p className="text-xl-bold text-green-800">Tani Jaya Makmur</p>
              <p className="text-sm-semibold text-green-400">Sup - 101</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-8 md:mx-0 md:w-[85%] md:gap-12 md:px-12 md:py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-2xl font-bold md:text-4xl">
            Selamat Datang Mitra!
          </h2>
          <p className="text-[12px] font-medium md:text-lg">
            Berikut ringkasan aktivitas platform PANGANTARA.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:gap-6">
          {cardProductData.map((item, index) => (
            <CardProductActive
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
          {cardIncomeData.map((item, index) => (
            <CardIncome
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
          {cardNewData.map((item, index) => (
            <CardNew key={index} value={item.value} />
          ))}
        </div>
        <div className="block w-full md:hidden">
          <div className="flex w-full items-center justify-between rounded-[12px] border border-b-0 border-green-900 bg-green-600 p-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-orange-900 bg-orange-600 p-2 text-orange-50">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-[12px] font-bold text-green-50">
                  Pesanan Terbaru
                </h2>
                <p className="text-[8px] font-semibold text-green-100">
                  5 pesanan terakhir di platform
                </p>
              </div>
            </div>
            <Link href="/admin/monitoring">
              <Button className="h-6 cursor-pointer bg-white text-[10px] font-bold text-green-500 hover:scale-105">
                Lihat semua <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:hidden">
          <DashboardCardMobile data={mitraData.slice(0, 5)} />
        </div>
        <MitraTable data={mitraData.slice(0, 5)} />
      </div>
    </section>
  );
};

export default MitraDashboardSection;
