import "@/shared/styles/globals.css";
import SidebarMitra from "@/shared/component/mitra/SidebarMitra";
import { SidebarInset, SidebarProvider } from "@/shared/component/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <SidebarMitra />
          <SidebarInset>
            <main className="h-full">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
