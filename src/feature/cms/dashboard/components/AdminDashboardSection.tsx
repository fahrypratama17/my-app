import { Store, ClipboardList, Coffee } from "lucide-react";
import Card from "@/feature/cms/dashboard/components/AdminCard";
import AdminTable from "@/feature/cms/dashboard/components/AdminTable";
import { orders } from "@/feature/cms/dashboard/data/data";

const cardData = [
  {
    title: "Total Mitra",
    value: 248,
    icon: <Store size={30} />,
  },
  {
    title: "Total User",
    value: 1024,
    icon: <ClipboardList size={30} />,
  },
  {
    title: "Total Produk",
    value: 532,
    icon: <Coffee size={30} />,
  },
];

const AdminDashboardSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="flex w-[90%] items-center justify-between px-12 py-7">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Admin
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-13 w-13 rounded-full bg-orange-600"></div>
            <div>
              <p className="text-xl-bold text-green-800">Admin</p>
              <p className="text-sm-semibold text-green-400">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[85%] flex-col items-start justify-between gap-12 px-12 py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-4xl-bold">Selamat Datang Admin!</h2>
          <p className="text-lg-medium">
            Berikut ringkasan aktivitas platform PANGANTARA.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-6">
          {cardData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
        <AdminTable data={orders.slice(0, 5)} />
      </div>
    </section>
  );
};

export default AdminDashboardSection;
