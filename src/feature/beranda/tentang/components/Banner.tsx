import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto flex w-[80%] items-center justify-center py-7.5 pt-10">
      <div className="flex w-[80%] items-center justify-center gap-4 rounded-[40px] border-2 border-green-900 bg-[#FFFFFF] py-2">
        <h1 className="text-[24px] font-semibold">
          Bekerja Sama untuk Mendukung Program MBG oleh
        </h1>
        <Image
          src="/logo/bgn.png"
          alt="Logo Badan Gizi Nasional"
          width={143}
          height={60}
        />
      </div>
    </div>
  );
};

export default Banner;
