import Banner from "@/feature/beranda/tentang/components/Banner";
import Stats from "@/feature/beranda/tentang/components/Stats";
import Tentang from "@/feature/beranda/tentang/components/Tentang";
import MengapaPangantara from "@/feature/beranda/tentang/components/MengapaPangantara";

const TentangSection = () => {
  return (
    <section className="bg-white md:pb-20">
      <Banner />
      <Stats />
      <div className="flex items-center gap-4 pt-12 md:pt-20">
        <div className="h-3 w-21.5 rounded-r-2xl bg-green-900 md:h-6"></div>
        <div
          id="tentang"
          className="w-110 text-2xl font-bold text-green-900 md:text-5xl"
        >
          Tentang{" "}
          <span className="text-2xl text-orange-500 md:text-5xl">Kami</span>
        </div>
        <div className="h-3 w-full rounded-l-2xl bg-green-900 md:h-6"></div>
      </div>
      <Tentang />
      <MengapaPangantara />
    </section>
  );
};

export default TentangSection;
