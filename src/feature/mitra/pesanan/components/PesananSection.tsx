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
import { mitraData } from "@/feature/mitra/pesanan/data/data";
import PesananTable from "@/feature/mitra/pesanan/components/PesananTable";
import CardPesanan from "@/feature/mitra/pesanan/components/CardPesanan";

const cardData = [
  {
    value: 9,
    status: "Total Pesanan",
    className: "text-green-900 border-2 border-green-900",
  },
  {
    value: 3,
    status: "Baru",
    className: "text-orange-50 bg-orange-900",
  },
  {
    value: 1,
    status: "Diproses",
    className: "text-orang-50 bg-orange-600",
  },
  {
    value: 2,
    status: "Dikirim",
    className: "text-green-50 bg-green-300",
  },
  {
    value: 3,
    status: "Selesai",
    className: "text-green-50 bg-green-500",
  },
];

const PesananSection = () => {
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
          <h2 className="text-4xl-bold">Pesanan Masuk</h2>
          <p className="text-lg-medium">
            Kelola dan proses pesanan dari pembeli.
          </p>
        </div>
        <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
          <div className="relative w-full">
            <Input
              className="peer border-2 border-green-900 bg-white transition-all duration-200 placeholder:font-medium placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2"
              placeholder="Cari Pesanan"
            />

            <Search className="pointer-events-none absolute top-2.5 left-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100" />
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
        <div className="grid w-full grid-cols-3 gap-20">
          {cardData.map((item, index) => (
            <CardPesanan
              key={index}
              value={item.value}
              status={item.status}
              className={item.className}
            />
          ))}
        </div>
        <PesananTable data={mitraData} />
      </div>
    </section>
  );
};

export default PesananSection;
