"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = [
  { name: "Beranda", href: "/#beranda", path: "/" },
  { name: "Cari Supplier", href: "/supplier", path: "/supplier" },
  { name: "FAQ", href: "/faq", path: "/faq" },
  { name: "Hubungi", href: "/hubungi", path: "/hubungi" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 top-0 z-100 mx-auto flex w-[85%] items-center justify-center pt-7.5">
      <div className="flex w-full items-center justify-between rounded-full border-2 border-green-900 bg-white px-20 py-3.25">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/logo/logo.svg"
            alt="logo pangantara"
            width={42}
            height={42}
          />
          <p className="text-xl-bold text-green-400">
            PANGAN<span className="text-orange-600">TARA</span>
          </p>
        </div>
        <div className="flex gap-12">
          {NavLink.map((item, index) => {
            const isActive = pathname === item.path;

            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (item.path === "/" && pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0 });
              }
            };

            return (
              <Link
                key={index}
                onClick={handleClick}
                href={item.href}
                className="group relative flex flex-col items-center"
              >
                <span
                  className={`${isActive ? "text-lg-bold text-green-900" : "text-md-medium text-green-600"}`}
                >
                  {item.name}
                </span>

                <span className="absolute -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-green-900 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-1">
          <Link
            href={"/"}
            className="group text-lg-bold relative overflow-hidden rounded-[24px] border-3 border-orange-600 px-9 py-1.25 text-orange-900"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Masuk
            </span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href={"/"}
            className="group text-lg-bold relative overflow-hidden rounded-[24px] border-3 border-orange-600 bg-orange-600 px-9 py-1.25 text-white"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-900">
              Daftar
            </span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
