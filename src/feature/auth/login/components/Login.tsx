"use client";

import Image from "next/image";
import Link from "next/link";
import { KeyRound, Mail } from "lucide-react";
import { useLoginForm } from "@/hooks";
import { Field } from "@/shared/component/ui/field";
import { Button } from "@/shared/component/ui/button";
import { FormInput } from "@/shared/component/auth/FormInput";
import { Spinner } from "@/shared/component/ui/spinner";

const Login = () => {
  const { form, isPending, handleInputChange, handleSubmit } = useLoginForm();

  return (
    <section className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-auto w-full max-w-[90%] space-y-8 rounded-[40px] border-3 border-green-900 bg-green-50 p-4 py-8 shadow-[2px_2px_0px_0px_var(--color-green-900)] md:h-[85vh] md:max-w-[35%] md:space-y-11 md:p-10 md:py-16 md:shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5 h-7 w-6 md:h-13 md:w-13"
            src="/logo/logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
          <p className="text-xl font-bold text-green-900 md:text-3xl">
            Masuk ke Akunmu!
          </p>
          <p className="w-[90%] pt-2 text-center text-[10px] font-medium text-green-900 md:w-[70%] md:pt-4 md:text-sm">
            Silakan masukkan email dan kata sandi untuk melanjutkan.
          </p>
        </div>

        <Field className="mx-auto mb-6 w-[90%] md:w-[80%]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <FormInput
              type="email"
              value={form.email}
              onChange={handleInputChange("email")}
              placeholder="Masukkan Email"
              leftIcon={<Mail size={20} className="h-4 w-4 md:h-5 md:w-5" />}
            />

            <FormInput
              type="password"
              value={form.password}
              onChange={handleInputChange("password")}
              placeholder="Masukkan Kata Sandi"
              leftIcon={
                <KeyRound
                  size={20}
                  className="h-4 w-4 rotate-90 md:h-5 md:w-5"
                />
              }
            />

            <Link
              href="/reset-password"
              className="block cursor-pointer text-end text-[8px] font-medium text-[#A9A9A9] hover:underline md:text-sm"
            >
              Lupa kata sandi?
            </Link>

            <Button
              type="submit"
              disabled={isPending}
              className="h-8 w-full cursor-pointer rounded-[36px] border-2 border-green-900 bg-orange-600 text-[10px] text-white hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 md:py-5 md:text-sm"
            >
              {isPending ? (
                <>
                  <p>Memproses...</p> <Spinner />
                </>
              ) : (
                "Masuk"
              )}
            </Button>
          </form>
        </Field>

        <div className="mx-auto w-[90%] space-y-4 md:w-[80%]">
          <p className="mt-8 text-center text-[10px] font-medium text-[#A9A9A9] md:mt-15 md:text-[16px]">
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

export default Login;
