import HeroContainer from "@/feature/beranda/hero/container/HeroContainer";
import TentangContainer from "@/feature/beranda/tentang/container/TentangContainer";
import AlurContainer from "@/feature/beranda/alur/container/AlurContainer";
import CTAContainer from "@/feature/beranda/cta/container/CTAContainer";

const page = () => {
  return (
    <>
      <HeroContainer />
      <TentangContainer />
      <AlurContainer />
      <CTAContainer />
    </>
  );
};

export default page;
