import { ShoppingCart, ArrowRight, UserRound } from "lucide-react";
import AdminTable from "@/feature/cms/dashboard/components/AdminTable";
import { orders } from "@/feature/cms/dashboard/data/data";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";
import AdminCardMobile from "@/feature/cms/dashboard/components/AdminCardMobile";
import AdminDashboardSummaryCards from "@/feature/cms/dashboard/components/AdminDashboardSummaryCards";

const AdminDashboardSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="hidden w-[90%] items-center justify-between px-12 py-7 md:flex">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Admin
          </h1>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-orange-600 p-3">
              <UserRound className="text-white" />
            </div>
            <div>
              <p className="text-xl-bold text-green-800">Admin</p>
              <p className="text-sm-semibold text-green-400">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-6 md:mx-0 md:w-[85%] md:gap-12 md:px-12 md:py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-[24px] font-bold md:text-4xl">
            Selamat Datang Admin!
          </h2>
          <p className="text-[12px] font-medium md:text-lg">
            Berikut ringkasan aktivitas platform PANGANTARA.
          </p>
        </div>

        <AdminDashboardSummaryCards />

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
          <AdminCardMobile data={orders.slice(0, 5)} />
        </div>

        <AdminTable data={orders.slice(0, 5)} />
      </div>
    </section>
  );
};

export default AdminDashboardSection;
