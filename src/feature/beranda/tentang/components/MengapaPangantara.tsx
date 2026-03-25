import { MengapaPangantaraData } from "@/feature/beranda/tentang/data/data";
import Image from "next/image";

const MengapaPangantara = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col items-center justify-center py-7.5 md:w-[85%]">
      <div className="mb-8 w-full rounded-[100px] bg-linear-to-r from-green-900 to-green-400 p-1 md:mb-20 md:w-[80%]">
        <div className="flex items-center justify-center gap-2 rounded-[96px] bg-white py-2 md:py-4">
          <h1 className="rounded-[32px] text-[16px] font-bold text-green-900 md:rounded-[80px] md:text-5xl">
            Mengapa harus <span className="text-green-400">PANGAN</span>
            <span className="text-orange-600">TARA</span> ?
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {MengapaPangantaraData.map((item) => (
          <div
            className={`${item.id % 2 === 1 ? "bg-linear-to-br from-green-900/80 via-green-400/80 to-green-400/80" : "bg-linear-to-br from-green-400/80 via-green-400/80 to-green-900/80"} flex flex-col items-center justify-start gap-2 rounded-[16px] border-2 border-green-900 bg-green-50 px-4 py-3 md:rounded-[40px] md:border-4 md:px-10 md:py-6 ${item.id === 3 ? "col-span-2 mx-auto flex w-[50%] md:col-span-1 md:mx-0 md:w-full" : ""}`}
            key={item.id}
          >
            <div className="rounded-[12px] bg-green-900 p-2">
              <Image
                src={item.icon}
                alt="icon"
                width={70}
                height={70}
                className="h-8 w-8 md:h-16 md:w-16"
              />
            </div>
            <div className="w-full text-center text-[10px] font-bold text-white md:w-[80%] md:pb-4 md:text-[20px]">
              {item.title}
            </div>
            <div className="rounded-3xl bg-linear-to-r from-green-900 to-green-400 p-0.5 md:p-1">
              <div className="rounded-2xl bg-orange-500 px-2 py-3 text-center text-[8px] leading-2 text-white md:px-10 md:py-8 md:text-[14px] md:leading-5">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex w-full items-center justify-start gap-3 md:mt-20 md:w-[75%] md:gap-10">
        <div className="rounded-tl-[58px] rounded-br-[58px] bg-linear-to-tr from-green-900 via-green-400 to-green-400 p-0.5 md:rounded-tl-[100px] md:rounded-br-[100px] md:p-1">
          <div className="rounded-tl-[54px] rounded-br-[54px] bg-green-500 px-4 py-5 md:rounded-tl-[96px] md:rounded-br-[96px] md:px-14">
            <p className="text-center text-[10px] font-medium text-green-50 md:py-8 md:text-[20px]">
              Distribusi pangan yang baik bukan hanya tentang makanan sampai ke
              penerima, tapi juga tentang memberdayakan supplier lokal,
              memperkuat pasar tradisional, dan memastikan rantai pasok berjalan
              lebih efisien.
            </p>
          </div>
        </div>

        <div className="rounded-full border-2 border-black p-4 shadow-[3px_3px_0px_0px_#0f301060] md:border-4 md:p-8 md:px-10 md:shadow-[8px_8px_0px_0px_#0f301060]">
          <Image
            src={"logo/logo.svg"}
            alt={"logo"}
            width={400}
            height={400}
            className="h-auto w-40 md:w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default MengapaPangantara;
