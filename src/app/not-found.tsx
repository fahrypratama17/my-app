import Footer from "@/shared/component/Footer";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex gap-2 md:gap-4">
          <Image
            src="/logo/logo.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-auto w-[clamp(16px,4vw,30px)]"
          />
          <p className="py-2 text-[16px] font-bold text-green-400 md:py-4 md:text-3xl">
            PANGAN<span className="text-orange-600">TARA</span>
          </p>
        </div>

        <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 md:flex-row md:gap-20">
          <Image
            src="/images/not-found.png"
            alt="Logo"
            width={900}
            height={900}
            className="h-auto w-54 rotate-20 md:w-136.5"
          />
          <div className="text-center md:w-[40%]">
            <p className="text-[96px] font-bold text-orange-500 md:text-[216px]">
              404
            </p>
            <p className="text-[20px] font-bold text-green-800 md:text-[36px]">
              Halaman Tidak Ditemukan
            </p>
            <p className="text-[14px] font-medium text-green-300 md:text-[20px]">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Kemungkinan
              halaman tersebut telah dipindahkan, dihapus, atau URL yang
              dimasukkan tidak sesuai.{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
