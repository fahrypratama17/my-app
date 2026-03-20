import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Button } from "@/shared/component/ui/button";
import { KeyRound, Mail } from "lucide-react";
import { FormInput } from "@/shared/component/FormInput";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-[85vh] w-full max-w-[35%] space-y-11 rounded-[40px] border-3 border-green-900 bg-green-50 p-10 py-16 shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5"
            src={"/logo/logo.svg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <p className="text-3xl font-bold text-green-900">Lupa Kata Sandi?</p>
          <p className="text-sm--medium w-[70%] pt-4 text-center text-green-900">
            Perbarui dan konfirmasi kata sandi.
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
        <div className="mx-auto w-[80%] space-y-4">
          <Button className="w-full cursor-pointer rounded-[36px] border-2 border-green-900 bg-orange-600 py-5 text-white hover:scale-105">
            Masuk
          </Button>
          <p className="text-md-medium mt-15 text-center text-[#A9A9A9]">
            Tidak punya akun?{" "}
            <Link
              href="/register"
              className="inline-block cursor-pointer font-bold text-green-900 transition-transform duration-200 hover:scale-105"
            >
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
