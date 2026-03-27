import "@/shared/styles/globals.css";
import Navbar from "@/shared/component/Navbar";
import Footer from "@/shared/component/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
