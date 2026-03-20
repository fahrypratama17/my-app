import "@/shared/styles/globals.css";
import SidebarCMS from "@/shared/component/SidebarCMS";
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
          <SidebarCMS />
          <SidebarInset>
            <main className="h-full">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
