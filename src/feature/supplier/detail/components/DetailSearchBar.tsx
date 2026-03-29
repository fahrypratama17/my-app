import { Input } from "@/shared/component/ui/input";
import { Search } from "lucide-react";

const DetailSearchBar = () => {
  return (
    <div className="relative w-full">
      <Input
        className="peer border-2 border-green-900 bg-white py-2 text-[8px] transition-all duration-200 placeholder:text-[8px] placeholder:font-medium placeholder:text-[#A7A7A7] active:ring-2 md:py-5 md:text-[16px] md:placeholder:text-[16px]"
        placeholder="Cari Produk"
      />

      <Search className="pointer-events-none absolute top-2.5 right-3 h-3 w-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100 md:top-2.5 md:h-6 md:w-6" />
    </div>
  );
};

export default DetailSearchBar;
