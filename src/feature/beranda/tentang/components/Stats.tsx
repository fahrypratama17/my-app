"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-6 md:w-[75%] md:pt-20">
      <div className="flex h-20 w-full items-center justify-evenly gap-4 rounded-[60px] border-4 border-green-900 bg-orange-500 py-2 md:h-50 md:gap-0">
        <div className="mb-10 flex min-h-25 w-full flex-col items-center justify-around rounded-[12px] bg-green-900 p-2 py-4 shadow-[3px_3px_0px_0px_var(--color-orange-600)] md:min-h-59.25 md:w-1/4 md:rounded-[32px] md:p-8 md:shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 text-[6px] font-semibold text-green-900 md:px-6 md:text-[16px]">
            Total Mitra Pemasok
          </h1>
          <div className="flex items-center text-2xl font-bold text-white md:text-7xl">
            <CountUp
              end={500}
              duration={5}
              delay={0.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <h1>+</h1>
          </div>
        </div>
        <div className="mb-10 flex min-h-25 w-full flex-col items-center justify-around rounded-[12px] bg-green-900 p-2 py-4 shadow-[3px_3px_0px_0px_var(--color-orange-600)] md:min-h-59.25 md:w-1/4 md:rounded-[32px] md:p-8 md:shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 text-[6px] font-semibold text-green-900 md:px-6 md:text-[16px]">
            Dapur MBG Aktif
          </h1>
          <div className="flex items-center text-2xl font-bold text-white md:text-7xl">
            <CountUp
              end={120}
              duration={4.5}
              delay={1}
              enableScrollSpy
              scrollSpyOnce
            />
            <h1>+</h1>
          </div>
        </div>
        <div className="mb-10 flex min-h-25 w-full flex-col items-center justify-around rounded-[12px] bg-green-900 p-2 py-4 shadow-[3px_3px_0px_0px_var(--color-orange-600)] md:min-h-59.25 md:w-1/4 md:rounded-[32px] md:p-8 md:shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 text-[6px] font-semibold text-green-900 md:px-6 md:text-[16px]">
            Wilayah Jangkauan
          </h1>
          <h1 className="text-2xl font-bold text-white md:text-7xl">
            <CountUp
              end={25}
              duration={4.7}
              delay={0.7}
              enableScrollSpy
              scrollSpyOnce
            />
            <span className="text-[10px] text-orange-200 md:text-2xl">
              Provinsi
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
