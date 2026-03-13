const Mitra = () => {
  return (
    <div className="mx-auto mt-20 mb-20 flex w-[85%] items-center justify-center gap-6 rounded-[100px] border-4 border-green-800">
      <div className="px-20 py-5">
        <div className="flex items-center justify-center pt-6">
          <p className="inline rounded-[100px] border-3 border-green-800 px-12 text-[36px] font-semibold text-green-800">
            Alur untuk <span className="text-orange-600">Mitra</span>
          </p>
        </div>

        <div className="mt-15 flex w-full flex-col items-start justify-center gap-4">
          <div className="flex items-center justify-center px-4">
            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-green-900">
              <p className="text-7xl font-bold text-white">01</p>
            </div>

            <div className="h-1 w-80 bg-[#000000]"></div>

            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-green-900">
              <p className="text-7xl font-bold text-white">02</p>
            </div>

            <div className="h-1 w-80 bg-[#000000]"></div>

            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-green-900">
              <p className="text-7xl font-bold text-white">03</p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-20">
            <div className="flex w-80 flex-col justify-center gap-6 rounded-2xl p-4">
              <p className="text-start text-2xl font-bold text-green-900">
                Pendaftaran & Verifikasi Mitra
              </p>
              <p className="text-[16px] font-medium text-green-900">
                Mitra mendaftar di platform Pangantara dan mengikuti sesi
                verifikasi online dengan tim untuk memastikan kelayakan serta
                standar kualitas.
              </p>
            </div>

            <div className="flex w-100 flex-col justify-center gap-6 rounded-2xl p-4">
              <p className="text-start text-2xl font-bold text-green-900">
                Mengunggah Produk
              </p>
              <p className="text-[16px] font-medium text-green-900">
                Setelah dinyatakan lolos verifikasi, mitra dapat mengunggah
                bahan pangan yang dijual lengkap dengan harga, deskripsi,
                spesifikasi, dan ketersediaan stok.
              </p>
            </div>

            <div className="flex w-60 flex-col justify-center gap-6 rounded-2xl p-4">
              <p className="text-start text-2xl font-bold text-green-900">
                Menerima Pesanan
              </p>
              <p className="text-[16px] font-medium text-green-900">
                Mitra dapat menerima pesanan dari SPPG dan mengirimkan bahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
