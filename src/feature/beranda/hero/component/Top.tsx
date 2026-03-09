import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const Top = () => {
  return (
    <div className="rounded-b-[100px] border-b">
      <div className="mx-auto w-full max-w-[85%]">
        <div className="grid grid-cols-2">
          <div className="mx-auto flex h-[110vh] items-center justify-center">
            <div className="flex flex-col items-start gap-6">
              <div className="flex gap-6">
                <Image
                  src="logo/logo.svg"
                  alt="Logo"
                  width={51.33333206176758}
                  height={57.75001907348633}
                />
                <p className="text-[60px] text-blue-900">
                  PANGAN<span className="text-blue-600">TARA</span>
                </p>
              </div>
              <p>
                Platform penghubung SPPG dan supplier untuk pengadaan bahan
                pangan MBG yang lebih mudah, transparan, dan terstandar.
              </p>
              <div className="flex items-center justify-center gap-4 rounded-[24px] border px-[20px] py-[12px]">
                <h1>Pelajari alur</h1>
                <div className="rounded-full border p-2">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-6">
                <div className="h-[279px] w-[293px] rounded-2xl bg-[#BCBCBC]"></div>
                <div className="h-[198px] w-[293px] rounded-2xl bg-[#BCBCBC]"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-[349px] w-[293px] rounded-2xl bg-[#BCBCBC]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
