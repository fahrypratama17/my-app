"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="mx-auto flex w-[75%] flex-col items-center justify-center pt-20">
      <div className="flex h-50 w-full items-center justify-evenly rounded-[60px] border-4 border-green-900 bg-orange-500 py-2">
        <div className="mb-10 flex h-59.25 flex-col items-center justify-around rounded-[32px] bg-green-900 p-8 shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 px-6 text-[16px] font-semibold">
            Total Mitra Pemasok
          </h1>
          <div className="text-7xl-bold flex items-center text-white">
            <CountUp
              className="text-7xl-bold"
              end={500}
              duration={5}
              delay={0.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <h1 className="text-7xl-bold">+</h1>
          </div>
        </div>
        <div className="mb-10 flex h-59.25 flex-col items-center justify-around rounded-[32px] bg-green-900 p-8 shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 px-6 text-[16px] font-semibold">
            Dapur MBG Aktif
          </h1>
          <div className="text-7xl-bold flex items-center text-white">
            <CountUp
              className="text-7xl-bold"
              end={120}
              duration={4.5}
              delay={1}
              enableScrollSpy
              scrollSpyOnce
            />
            <h1 className="text-7xl-bold">+</h1>
          </div>
        </div>
        <div className="mb-10 flex h-59.25 flex-col items-center justify-around rounded-[32px] bg-green-900 p-8 shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 px-6 text-[16px] font-semibold">
            Wilayah Jangkauan
          </h1>
          <h1 className="text-7xl-bold text-white">
            <CountUp
              className="text-7xl-bold"
              end={25}
              duration={4.7}
              delay={0.7}
              enableScrollSpy
              scrollSpyOnce
            />
            <span className="text-2xl text-orange-200">Provinsi</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
