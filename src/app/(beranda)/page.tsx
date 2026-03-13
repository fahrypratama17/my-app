import HeroContainer from "@/feature/beranda/hero/container/HeroContainer";
import TentangContainer from "@/feature/beranda/tentang/container/TentangContainer";
import PenggunaanContainer from "@/feature/beranda/penggunaan/container/PenggunaanContainer";
import CTAContainer from "@/feature/beranda/cta/container/CTAContainer";
import Footer from "@/shared/component/Footer";

const page = () => {
  return (
    <>
      <main>
        <HeroContainer />
        <TentangContainer />
        <PenggunaanContainer />
        <CTAContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default page;
