import Banner from "@/feature/beranda/tentang/components/Banner";
import Stats from "@/feature/beranda/tentang/components/Stats";
import Tentang from "@/feature/beranda/tentang/components/Tentang";
import MengapaPangantara from "@/feature/beranda/tentang/components/MengapaPangantara";

const TentangSection = () => {
  return (
    <div className="bg-white pb-20">
      <Banner />
      <Stats />
      <div className="flex items-center gap-4 pt-20">
        <div className="h-6 w-21.5 rounded-r-2xl bg-green-900"></div>
        <div className="w-110 text-5xl font-bold text-green-900">
          Tentang <span className="text-5xl text-orange-500">Kami</span>
        </div>
        <div className="h-6 w-full rounded-l-2xl bg-green-900"></div>
      </div>
      <Tentang />
      <MengapaPangantara />
    </div>
  );
};

export default TentangSection;
