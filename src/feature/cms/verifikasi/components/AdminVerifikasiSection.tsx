import { UserRound } from "lucide-react";
import AdminVerifikasiData from "@/feature/cms/verifikasi/components/AdminVerifikasiData";

const AdminVerifikasiSection = () => {
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
            Verifikasi Mitra
          </h2>
          <p className="text-[12px] font-medium md:text-lg">
            Kelola dan verifikasi pendaftaran mitra baru di platform PANGANTARA.
          </p>
        </div>

        <AdminVerifikasiData />
      </div>
    </section>
  );
};

export default AdminVerifikasiSection;
