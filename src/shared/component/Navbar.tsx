"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLogoutMutation } from "@/shared/repository/login/query";
import { Roles } from "@/shared/lib/auth/role";
import { ChevronDown, ChevronUp, LogOut } from "lucide-react";

type NavbarAuthUser = {
  isLoggedIn?: boolean;
  name?: string;
  address?: string;
  role?: Roles;
};

const NavLink = [
  { name: "Beranda", href: "/#beranda", path: "/" },
  {
    name: "Cari Supplier",
    href: "/sppg/cari-supplier",
    path: "/sppg/cari-supplier",
  },
  { name: "FAQ", href: "/FAQ", path: "/FAQ" },
  { name: "Hubungi", href: "/sppg/hubungi", path: "/sppg/hubungi" },
];

type NavbarProps = {
  authUser?: NavbarAuthUser;
};

const Navbar = ({ authUser }: NavbarProps) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { mutate: logout, isPending: isLogoutPending } = useLogoutMutation();

  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const isLoggedInSppg =
    Boolean(authUser?.isLoggedIn) && authUser?.role === Roles.sppg;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 400) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const displayName = authUser?.name?.trim() || "SPPG";
  const displayAddress = authUser?.address?.trim() || "Alamat belum tersedia";

  return (
    <>
      {!isMobile && (
        <div
          className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} ${showNavbar ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className={`flex w-full items-center justify-between`}>
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

                const handleClick = (
                  e: React.MouseEvent<HTMLAnchorElement>,
                ) => {
                  setIsAccountMenuOpen(false);
                  setIsOpen(false);

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
            {isLoggedInSppg ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAccountMenuOpen((prev) => !prev)}
                  className="text-lg-bold flex cursor-pointer items-center gap-4 rounded-[24px] px-6 py-1.25 text-orange-900"
                >
                  <p>{displayName}</p>
                  <ChevronDown
                    className={`transition-transform duration-500 ${
                      isAccountMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isAccountMenuOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-full rounded-2xl border border-green-900 bg-[#EEE6D4] shadow-md">
                    <div className="border-b border-green-900 px-4 py-3">
                      <p className="text-base font-bold text-green-900">
                        {displayName}
                      </p>
                      <p className="text-xs text-green-700">{displayAddress}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAccountMenuOpen(false);
                        logout();
                      }}
                      disabled={isLogoutPending}
                      className="w-full cursor-pointer rounded-b-2xl px-4 py-3 text-left text-sm font-semibold text-green-900 transition hover:bg-[#E5DDCC] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLogoutPending ? (
                        "Memproses..."
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <LogOut className="p-1" /> <p>Keluar</p>
                        </div>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1">
                <Link
                  href={"/login"}
                  className="group text-lg-bold relative overflow-hidden rounded-[24px] border-3 border-orange-600 px-9 py-1.25 text-orange-900"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Masuk
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href={"/register"}
                  className="group text-lg-bold relative overflow-hidden rounded-[24px] border-3 border-orange-600 bg-orange-600 px-9 py-1.25 text-white"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-900">
                    Daftar
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {isMobile && (
        <>
          <div
            className={`navbar-mobile ${scrolled ? "scrolled-mobile" : "not-scrolled-mobile"} ${showNavbar ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <div className={`flex w-full items-center justify-between`}>
              <div className="flex items-center justify-center gap-1">
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

              {isLoggedInSppg ? (
                <div className="mt-4 flex flex-col gap-3">
                  <button
                    type="button"
                    className="rounded-xl border-2 border-orange-500 px-6 py-2 text-center font-semibold text-white"
                  >
                    {displayName}
                  </button>
                  <p className="max-w-[220px] text-center text-xs text-white/80">
                    {displayAddress}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      logout();
                    }}
                    disabled={isLogoutPending}
                    className="rounded-xl bg-red-500 px-6 py-2 text-center text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLogoutPending ? "Memproses..." : "Logout"}
                  </button>
                </div>
              ) : (
                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border-2 border-orange-500 px-6 py-2 text-center text-white"
                  >
                    Masuk
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl bg-orange-500 px-6 py-2 text-center text-white"
                  >
                    Daftar
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
