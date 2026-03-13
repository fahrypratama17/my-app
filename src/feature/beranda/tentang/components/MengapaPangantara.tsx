import { MengapaPangantaraData } from "@/feature/beranda/tentang/data/data";
import Image from "next/image";

const MengapaPangantara = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-center py-7.5">
      <div className="mb-20 w-[80%] rounded-[100px] bg-linear-to-r from-green-900 to-green-400 p-1">
        <div className="flex items-center justify-center gap-2 rounded-[96px] bg-white px-10 py-4">
          <h1 className="rounded-[80px] text-5xl font-bold text-green-900">
            Mengapa harus <span className="text-green-400">PANGAN</span>
            <span className="text-orange-600">TARA</span> ?
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {MengapaPangantaraData.map((item) => (
          <div
            className={`${item.id % 2 === 1 ? "bg-linear-to-br from-green-900/80 via-green-400/80 to-green-400/80" : "bg-linear-to-br from-green-400/80 via-green-400/80 to-green-900/80"} flex flex-col items-center justify-center gap-2 rounded-[40px] border-4 border-green-900 bg-green-50 px-10 py-6`}
            key={item.id}
          >
            <div className="rounded-3xl border bg-green-900 px-2">
              <Image src={item.icon} alt="icon" width={70} height={70} />
            </div>
            <div className="w-[80%] pb-4 text-center text-[20px] font-bold text-white">
              {item.title}
            </div>
            <div className="rounded-3xl bg-linear-to-r from-green-900 to-green-400 p-1">
              <div className="rounded-2xl bg-orange-500 px-10 py-8 text-center text-[14px] text-white">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex w-[75%] items-center justify-start gap-10">
        <div className="rounded-tl-[100px] rounded-br-[100px] bg-linear-to-tr from-green-900 via-green-400 to-green-400 p-1">
          <div className="rounded-tl-[96px] rounded-br-[96px] bg-green-500 px-14 py-5">
            <p className="px-2 py-8 text-center text-[20px] font-medium text-green-50">
              Distribusi pangan yang baik bukan hanya tentang makanan sampai ke
              penerima, tapi juga tentang memberdayakan supplier lokal,
              memperkuat pasar tradisional, dan memastikan rantai pasok berjalan
              lebih efisien.
            </p>
          </div>
        </div>

        <div className="rounded-full border-4 border-black p-8 px-10 shadow-[8px_8px_0px_0px_#0f301060]">
          <Image src={"logo/logo.svg"} alt={"logo"} width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default MengapaPangantara;
