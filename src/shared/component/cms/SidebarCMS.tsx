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
import { useLogoutMutation } from "@/shared/repository/login/query";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";

const SidebarCMS = () => {
  const pathname = usePathname();
  const { mutate: logout, isPending: isLogoutPending } = useLogoutMutation();

  return (
    <Sidebar
      collapsible="none"
      className="hidden h-full w-full max-w-xs bg-orange-50 md:block"
    >
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
                isActive={pathname === "/admin/dashboard"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/admin/dashboard"
                  className="flex items-center text-green-300"
                >
                  Ringkasan Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/admin/verifikasi"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/admin/verifikasi"
                  className="flex items-center text-green-300"
                >
                  Verifikasi Mitra
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/admin/manajemen"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/admin/manajemen"
                  className="flex items-center text-green-300"
                >
                  Manajemen Mitra
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/admin/monitoring"}
                className="rounded-[12px] transition-colors duration-200 hover:bg-green-500 hover:text-white data-[active=true]:bg-green-500 data-[active=true]:text-white"
              >
                <Link
                  href="/admin/monitoring"
                  className="flex items-center text-green-300"
                >
                  Monitoring Pesanan
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem className="mt-2 pt-2">
              <SidebarMenuButton
                onClick={() => logout()}
                disabled={isLogoutPending}
                className="cursor-pointer rounded-[12px] bg-green-500 text-white transition-colors duration-200 hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                <LogOut className="size-4" />
                <span>{isLogoutPending ? "Memproses..." : "Logout"}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarCMS;
