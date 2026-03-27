import { Store, Banknote } from "lucide-react";
import CardProductActive from "@/feature/mitra/dashboard/components/CardProductActive";
import MitraTable from "@/feature/mitra/dashboard/components/MitraTable";
import { mitraData } from "@/feature/mitra/dashboard/data/data";
import CardIncome from "@/feature/mitra/dashboard/components/CardIncome";
import CardNew from "@/feature/mitra/dashboard/components/CardNew";

const cardProductData = [
  {
    title: "Total Produk Aktif",
    value: 24,
    icon: <Store size={30} />,
  },
];

const cardIncomeData = [
  {
    title: "Total Pendapatan",
    value: "Rp 1.989.000",
    icon: <Banknote size={30} />,
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
        <div className="flex w-[90%] items-center justify-between px-12 py-7">
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
      <div className="flex w-[85%] flex-col items-start justify-between gap-12 px-12 py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-4xl-bold">Selamat Datang Mitra!</h2>
          <p className="text-lg-medium">
            Berikut ringkasan aktivitas platform PANGANTARA.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-6">
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
        <MitraTable data={mitraData.slice(0, 5)} />
      </div>
    </section>
  );
};

export default MitraDashboardSection;
