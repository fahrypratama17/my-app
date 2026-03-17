const SPPG = () => {
  return (
    <div className="mx-auto mt-20 mb-15 flex w-[85%] items-center justify-center gap-6 rounded-[100px] border-4 border-green-800">
      <div className="px-20 py-5">
        <div className="flex items-center justify-center pt-6">
          <p className="text-4xl-semibold inline rounded-[100px] border-3 border-orange-900 px-12 py-2 text-green-800">
            Alur untuk <span className="text-orange-600">tim SPPG</span>
          </p>
        </div>

        <div className="mt-15 flex w-full flex-col items-start justify-center gap-4">
          <div className="flex items-center justify-center px-4">
            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-green-900">
              <p className="text-7xl-bold text-white">01</p>
            </div>

            <div className="h-1 w-80 bg-[#000000]"></div>

            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-green-900">
              <p className="text-7xl-bold text-white">02</p>
            </div>

            <div className="h-1 w-80 bg-[#000000]"></div>

            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-green-900">
              <p className="text-7xl-bold text-white">03</p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-20">
            <div className="flex w-80 flex-col justify-center gap-6 rounded-2xl p-4">
              <p className="text-2xl-bold w-[85%] text-start text-green-900">
                Identifikasi Kebutuhan
              </p>
              <p className="text-md-medium w-[85%] text-green-900">
                Input daftar kebutuhan bahan pangan harian atau mingguan melalui
                dasbor manajemen stok SPPG.
              </p>
            </div>

            <div className="flex w-100 flex-col justify-center gap-6 rounded-2xl p-4">
              <p className="text-2xl-bold text-start text-green-900">
                Pilih Supplier Terbaik
              </p>
              <p className="text-md-medium w-[80%] text-green-900">
                Bandingkan harga dan kualitas dari ratusan mitra supplier
                terpercaya yang paling dekat dengan lokasi Anda.
              </p>
            </div>

            <div className="flex w-60 flex-col justify-center gap-6 rounded-2xl p-4">
              <p className="text-2xl-bold text-start text-green-900">
                Terima & Verifikasi
              </p>
              <p className="text-md-medium w-[70%] text-green-900">
                Barang dikirim langsung ke dapur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPPG;
