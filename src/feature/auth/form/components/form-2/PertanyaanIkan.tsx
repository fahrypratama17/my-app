const PertanyaanIkan = () => {
  return (
    <section className="bg-green-50 pb-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 pb-12">
          <h2 className="text-2xl-bold text-green-900">
            2. Apakah ikan memiliki ciri insang berawarna merah, mata ikan
            jernih (tidak buram), daging kenyal dan kembali saat ditekan, dan
            tidak berbau busuk?
          </h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Ya</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Tidak</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PertanyaanIkan;
