const Stats = () => {
  return (
    <div className="mx-auto flex w-[75%] flex-col items-center justify-center pt-20">
      <div className="flex h-50 w-full items-center justify-evenly rounded-[60px] border-4 border-green-900 bg-orange-500 py-2">
        <div className="mb-10 flex h-59.25 flex-col items-center justify-around rounded-[32px] bg-green-900 p-8 shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 px-6 text-[16px] font-semibold">
            Total Mitra Pemasok
          </h1>
          <h1 className="text-7xl font-bold text-white">500+</h1>
        </div>
        <div className="mb-10 flex h-59.25 flex-col items-center justify-around rounded-[32px] bg-green-900 p-8 shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 px-6 text-[16px] font-semibold">
            Dapur MBG Aktif
          </h1>
          <h1 className="text-7xl font-bold text-white">120+</h1>
        </div>
        <div className="mb-10 flex h-59.25 flex-col items-center justify-around rounded-[32px] bg-green-900 p-8 shadow-[6px_6px_0px_0px_var(--color-orange-600)]">
          <h1 className="rounded-full bg-white p-2 px-6 text-[16px] font-semibold">
            Wilayah Jangkauan
          </h1>
          <h1 className="text-7xl font-bold text-white">
            25 <span className="text-2xl text-orange-200">Provinsi</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
