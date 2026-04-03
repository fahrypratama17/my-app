"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLogoutMutation } from "@/shared/repository/login/query";

const NavLink = [
  { name: "Ringkasan Dashboard", href: "/mitra/dashboard" },
  { name: "Produk Saya", href: "/mitra/produk" },
  { name: "Pesanan", href: "/mitra/pesanan" },
  { name: "Customer Service", href: "/mitra/customer-service" },
];

const NavbarMitra = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: logout, isPending: isLoggingOut } = useLogoutMutation();

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-1/2 z-100 flex w-full -translate-x-1/2 items-center justify-between bg-white px-4 py-3.5 shadow-md transition-all duration-300">
        <button
          className="flex cursor-pointer flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </button>
        <div className="flex items-center justify-between">
          <div
            className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-1 transition-all duration-500 ${
              isOpen
                ? "-translate-y-10 opacity-0 blur-sm"
                : "translate-y-0 opacity-100"
            }`}
          >
            <Image
              src="/logo/logo.svg"
              alt="logo pangantara"
              width={22}
              height={25}
            />
            <p className="text-[14px] font-bold text-green-400">
              PANGAN<span className="text-orange-600">TARA</span>
            </p>
          </div>
        </div>
        <div
          className={`h-6 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
            isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"
          }`}
        />
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`flex transform flex-col items-center gap-6 transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {NavLink.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-bold text-white transition hover:text-orange-400 md:text-2xl"
            >
              {item.name}
            </Link>
          ))}

          <button
            type="button"
            disabled={isLoggingOut}
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="cursor-pointer rounded-[12px] border border-white px-4 py-2 text-[16px] font-bold text-white transition hover:bg-white hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoggingOut ? "Memproses..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMitra;
