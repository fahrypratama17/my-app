import "@/shared/styles/globals.css";
import SidebarMitra from "@/shared/component/mitra/SidebarMitra";
import { SidebarInset, SidebarProvider } from "@/shared/component/ui/sidebar";
import NavbarMitra from "@/shared/component/mitra/NavbarMitra";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarMitra />

      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <SidebarMitra />
          <SidebarInset>
            <main className="h-full pt-20 md:pt-0">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
