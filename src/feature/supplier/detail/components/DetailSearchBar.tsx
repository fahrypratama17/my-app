import { Input } from "@/shared/component/ui/input";
import { Search } from "lucide-react";

const DetailSearchBar = () => {
  return (
    <div className="relative w-full">
      <Input
        className="peer border-2 border-green-900 bg-white transition-all duration-200 placeholder:font-medium placeholder:text-[#A7A7A7] active:ring-2"
        placeholder="Cari Produk"
      />

      <Search className="pointer-events-none absolute top-2.5 right-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100" />
    </div>
  );
};

export default DetailSearchBar;
