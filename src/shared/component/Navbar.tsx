import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-100 mx-auto flex w-[90%] items-center justify-center pt-7.5">
      <div className="flex w-full items-center justify-between rounded-full border border-green-900 bg-white px-30 py-3.25 ring-2">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/logo/logo.svg"
            alt="logo pangantara"
            width={42}
            height={42}
          />
          <p className="text-[20px] font-bold text-green-400">
            PANGAN<span className="text-orange-600">TARA</span>
          </p>
        </div>
        <div className="flex gap-12 text-[16px] font-medium text-green-600">
          <Link href={"/"} className="font-bold">
            Beranda
          </Link>
          <Link href={"/"}>Cari Supplier</Link>
          <Link href={"/"}>FAQ</Link>
          <Link href={"/"}>Hubungi</Link>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Link
            href={"/"}
            className="rounded-[24px] border-3 border-orange-600 px-7.75 py-1.25 font-bold text-orange-900"
          >
            Masuk
          </Link>
          <Link
            href={"/"}
            className="rounded-[24px] border bg-orange-600 px-7.75 py-1.25 font-bold text-white"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
