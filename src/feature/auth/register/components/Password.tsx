import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { KeyRound } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { FormInput } from "@/shared/component/FormInput";
import Link from "next/link";

const Password = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-[90vh] w-full max-w-[35%] space-y-12 rounded-[40px] border-3 border-green-900 bg-green-50 p-10 py-12 shadow-[4px_4px_0px_0px_var(--color-green-900)]">
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
        <Field className="mx-auto mb-12 w-[80%]">
          <div className="space-y-4">
            <FormInput
              type="password"
              placeholder="Masukkan Kata Sandi"
              leftIcon={<KeyRound size={20} className="rotate-90" />}
            />
            <FormInput
              type="password"
              placeholder="Konfirmasi Kata Sandi"
              leftIcon={<KeyRound size={20} className="rotate-90" />}
            />
          </div>
        </Field>
        <div className="mx-auto flex w-[80%] flex-col space-y-24">
          <div className="w-full gap-4">
            <Link href="/form-1">
              <Button
                className="w-full cursor-pointer rounded-[36px] border-2 border-green-900 bg-orange-600 py-5 text-white transition-transform duration-200 hover:scale-105"
                variant="default"
                size="default"
              >
                Daftar
              </Button>
            </Link>
          </div>
          <p className="mt-10 text-center">
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

export default Password;
