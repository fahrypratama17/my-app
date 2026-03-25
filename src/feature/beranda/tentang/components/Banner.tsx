import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center py-7.5 pt-10 md:w-[80%]">
      <div className="flex w-[90%] items-center justify-center gap-2 rounded-[40px] border-2 border-green-900 bg-[#FFFFFF] py-2 md:w-[80%] md:gap-4">
        <h1 className="text-[10px] font-semibold text-green-900 md:text-2xl">
          Bekerja Sama untuk Mendukung Program MBG oleh
        </h1>
        <Image
          src="/logo/bgn.png"
          alt="Logo Badan Gizi Nasional"
          width={143}
          height={60}
          className="h-auto w-12 md:w-36"
        />
      </div>
    </div>
  );
};

export default Banner;
