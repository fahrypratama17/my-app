import { Input } from "@/shared/component/ui/input";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";
import { verif } from "@/feature/cms/verifikasi/data/data";
import AdminVerifikasiInteractive from "@/feature/cms/verifikasi/components/AdminVerifikasiInteractive";

const AdminVerifikasiSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="hidden w-[90%] items-center justify-between px-12 py-7 md:flex">
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
      <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-6 md:mx-0 md:w-[85%] md:gap-12 md:px-12 md:py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h2 className="text-[24px] font-bold md:text-4xl">
            Verifikasi Mitra
          </h2>
          <p className="text-[12px] font-medium md:text-lg">
            Kelola dan verifikasi pendaftaran mitra baru di platform PANGANTARA.
          </p>
        </div>
        <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
          <div className="relative w-full">
            <Input
              className="peer border-2 border-green-900 bg-white py-1 text-[8px] transition-all duration-200 placeholder:text-[8px] placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2 md:py-5 md:text-lg md:placeholder:text-lg md:placeholder:font-medium"
              placeholder="Cari Nama Usaha atau Pemilik"
            />

            <Search className="pointer-events-none absolute top-1 left-3 p-1 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100 md:top-2.5 md:p-0" />
          </div>
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="flex items-center justify-between"
              >
                <Button className="flex h-full w-full items-center justify-between border-2 border-green-900 bg-transparent text-[#A7A7A7]">
                  <p>Semua</p>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Satu</DropdownMenuItem>
                  <DropdownMenuItem>Dua</DropdownMenuItem>
                  <DropdownMenuItem>Tiga</DropdownMenuItem>
                  <DropdownMenuItem>Empat</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <AdminVerifikasiInteractive data={verif} />
      </div>
    </section>
  );
};

export default AdminVerifikasiSection;
