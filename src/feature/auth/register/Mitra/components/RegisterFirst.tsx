import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Input } from "@/shared/component/ui/input";
import { Package, MapPin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const RegisterFirst = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-[90vh] w-full max-w-[35%] space-y-4 rounded-[40px] border-3 border-green-900 bg-green-50 p-10 py-12 shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5"
            src={"/logo/logo.svg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <p className="text-3xl font-bold text-green-900">Selamat Datang!</p>
          <p className="w-[80%] pt-4 text-center text-sm font-medium text-green-900">
            Lengkapi data berikut untuk memulai perjalananmu bersama kami.
          </p>
        </div>
        <div className="mx-auto mb-12 flex w-[80%] justify-between rounded-[32px] border-2 border-green-900 bg-[#E6E6E6] px-0.5 py-0.5">
          <p className="rounded-[32px] px-10 py-2 text-sm font-medium text-green-900">
            Tim SPPG
          </p>
          <p className="rounded-[32px] bg-orange-600 px-20 py-2 text-sm font-medium text-orange-50">
            Mitra
          </p>
        </div>
        <Field className="mx-auto mb-6 w-[80%]">
          <div className="mb-9 space-y-4">
            <div className="relative">
              <Input
                className="bg-white px-10 ring-2 placeholder:font-medium"
                placeholder="Masukkan Nama Dapur"
              />
              <Package
                className="absolute top-3 left-3"
                width={20}
                height={20}
              />
            </div>
            <div className="relative">
              <Input
                className="bg-white px-10 ring-2 placeholder:font-medium"
                placeholder="Masukkan Alamat"
              />
              <MapPin
                className="absolute top-3 left-3"
                width={20}
                height={20}
              />
            </div>
            <div className="relative">
              <Input
                className="bg-white px-10 ring-2 placeholder:font-medium"
                placeholder="Masukkan Email"
              />
              <Mail className="absolute top-3 left-3" width={20} height={20} />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-end gap-2">
            <p className="text-end text-sm font-bold text-green-900">
              Lanjutkan
            </p>
            <Link
              href="/register/password"
              className="rounded-full border bg-green-700 p-2 text-orange-400"
            >
              <ArrowRight width={20} height={20} />
            </Link>
          </div>
        </Field>
        <div className="mx-auto w-[80%] space-y-4">
          <p className="mt-2 text-center text-[15px] font-medium text-[#A9A9A9]">
            Sudah punya akun?{" "}
            <span className="font-bold text-green-900">Masuk</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterFirst;
