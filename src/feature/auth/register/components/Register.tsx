import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Package, MapPin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FormInput } from "@/shared/component/FormInput";
import { Tabs, TabsList, TabsTrigger } from "@/shared/component/ui/tabs";

const Register = () => {
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
          <p className="text-3xl-bold text-green-900">Selamat Datang!</p>
          <p className="text-sm-medium w-[80%] pt-4 text-center text-green-900">
            Lengkapi data berikut untuk memulai perjalananmu bersama kami.
          </p>
        </div>
        <Tabs
          defaultValue="SPPG"
          className="mx-auto mb-12 flex w-[80%] cursor-pointer justify-between rounded-[32px] border-2 border-green-900 bg-[#E6E6E6] px-0.5 py-0.5"
        >
          <TabsList className="text-sm-medium w-full rounded-[32px] px-10 py-2 text-green-900">
            <TabsTrigger
              className="text-sm-medium cursor-pointer rounded-[32px] px-15 py-3.5 text-green-900"
              value="SPPG"
            >
              Tim SPPG
            </TabsTrigger>
            <TabsTrigger
              className="text-sm-medium cursor-pointer rounded-[32px] px-15 py-3.5 text-green-900"
              value="Mitra"
            >
              Mitra
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Field className="mx-auto mb-6 w-[80%]">
          <div className="mb-9 space-y-4">
            <FormInput
              type="text"
              placeholder="Masukkan Nama Dapur"
              leftIcon={<Package size={20} />}
            />
            <FormInput
              type="text"
              placeholder="Masukkan Alamat"
              leftIcon={<MapPin size={20} />}
            />
            <FormInput
              type="email"
              placeholder="Masukkan Email"
              leftIcon={<Mail size={20} />}
            />
          </div>

          <div className="mt-2 flex origin-right cursor-pointer items-center justify-end gap-2 transition-transform duration-200 hover:scale-105">
            <p className="text-sm-bold text-end text-green-900">Lanjutkan</p>
            <Link
              href="/password"
              className="rounded-full border bg-green-700 p-2 text-orange-400"
            >
              <ArrowRight width={20} height={20} />
            </Link>
          </div>
        </Field>
        <div className="mx-auto w-[80%] space-y-4">
          <p className="text-md-medium mt-2 text-center text-[#A9A9A9]">
            Sudah punya akun?{" "}
            <span className="inline-block cursor-pointer font-bold text-green-900 transition-transform duration-200 hover:scale-105">
              Masuk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
