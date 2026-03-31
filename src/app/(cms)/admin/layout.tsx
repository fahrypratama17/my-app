import "@/shared/styles/globals.css";
import SidebarCMS from "@/shared/component/cms/SidebarCMS";
import { SidebarInset, SidebarProvider } from "@/shared/component/ui/sidebar";
import NavbarCMS from "@/shared/component/cms/NavbarCMS";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarCMS />

      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <SidebarCMS />
          <SidebarInset>
            <main className="h-full pt-20 md:pt-0">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
