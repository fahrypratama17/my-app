import SuccessProgress from "@/feature/auth/form/components/form-2/SuccessProgress";
import { Button } from "@/shared/component/ui/button";
import { House } from "lucide-react";
import Link from "next/link";

const RegisterSuccessSection = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-green-50">
      <div className="mx-auto h-auto w-full max-w-[90%] space-y-4 rounded-[40px] border-3 border-green-900 bg-white p-4 py-6 shadow-[2px_2px_0px_0px_var(--color-green-900)] md:max-w-[35%] md:p-10 md:py-12 md:shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center gap-12">
          <video autoPlay muted playsInline className="h-20 w-20">
            <source src="/animation/check.webm" type="video/webm" />
          </video>
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-2xl-bold text-green-900">
              Pendaftaran berhasil!
            </p>
            <p className="text-sm-medium mx-auto w-[90%] text-center text-green-500">
              Tim kami akan meninjau pengajuan profil mitra Anda dalam 2-3 hari
              kerja. Kami akan memberikan kabar melalui email Anda segera.
            </p>
          </div>
          <SuccessProgress />
          <Link href="/" className="block w-full">
            <Button className="group relative w-full cursor-pointer overflow-hidden border border-green-900 bg-orange-100 py-6 text-xl font-bold text-green-800 transition-all duration-300">
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

              <p className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Kembali ke Beranda
              </p>

              <House className="absolute right-12 z-10 h-8 w-8 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterSuccessSection;
