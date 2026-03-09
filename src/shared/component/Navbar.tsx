import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-100 mx-auto flex w-[85%] items-center justify-center pt-[30px]">
      <div className="flex w-full items-center justify-between rounded-full border bg-white px-[26px] py-[13px]">
        <div className="flex items-center justify-center gap-1">
          <Image src="logo/logo.svg" alt="Logo" width={42} height={42} />
          <p className="text-[20px] text-blue-900">
            PANGAN<span className="text-blue-600">TARA</span>
          </p>
        </div>
        <div className="flex gap-12">
          <p className="font-bold">Beranda</p>
          <p>Cari Supplier</p>
          <p>Daftar Mitra</p>
          <p>FAQ</p>
        </div>
        <div className="flex items-center justify-center gap-12">
          <p>Masuk</p>
          <p className="rounded-[24px] border px-[31px] py-[5px]">Daftar</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
