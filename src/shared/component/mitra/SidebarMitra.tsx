"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/component/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

const SidebarCMS = () => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none" className="h-full w-full max-w-xs bg-green-50">
      <SidebarHeader className="border-b border-b-[#A7A7A7] py-6">
        <div className="mx-auto flex w-[80%] flex-row items-center justify-center gap-1 rounded-[40px] border border-green-800 bg-white py-2">
          <Image src="/logo/logo.svg" alt="Logo" width={37} height={42} />
          <h3 className="text-xl-bold text-green-400">
            PANGAN<span className="text-orange-600">TARA</span>
          </h3>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="py-10 text-2xl font-bold text-green-700">
            Menu Utama
          </SidebarGroupLabel>

          <SidebarMenu className="text-lg-semibold flex w-[90%] gap-6 px-2">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/mitra/dashboard"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/mitra/dashboard"
                  className="flex items-center text-green-300"
                >
                  Ringkasan Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/mitra/produk"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/mitra/produk"
                  className="flex items-center text-green-300"
                >
                  Produk Saya
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/mitra/pesanan"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/mitra/pesanan"
                  className="flex items-center text-green-300"
                >
                  Pesanan
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/mitra/customer-service"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/mitra/customer-service"
                  className="flex items-center text-green-300"
                >
                  Customer Service
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarCMS;
