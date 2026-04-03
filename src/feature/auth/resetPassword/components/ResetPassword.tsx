"use client";

import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Button } from "@/shared/component/ui/button";
import { KeyRound } from "lucide-react";
import { FormInput } from "@/shared/component/auth/FormInput";
import { Spinner } from "@/shared/component/ui/spinner";
import { useResetPasswordForm } from "@/hooks/use-reset-password-form";

const ResetPassword = () => {
  const { form, isPending, handleInputChange, handleSubmit } =
    useResetPasswordForm();

  return (
    <section className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto flex h-auto w-full max-w-[90%] flex-col items-center justify-center space-y-8 rounded-[40px] border-3 border-green-900 bg-green-50 p-4 py-8 shadow-[2px_2px_0px_0px_var(--color-green-900)] md:h-[85vh] md:max-w-[35%] md:space-y-11 md:p-10 md:py-16 md:shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5 h-7 w-6 md:h-13 md:w-13"
            src={"/logo/logo.svg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <p className="text-xl font-bold text-green-900 md:text-3xl">
            Lupa Kata Sandi?
          </p>
          <p className="w-[90%] pt-2 text-center text-[10px] font-medium text-green-900 md:w-full md:pt-4 md:text-sm">
            Perbarui dan konfirmasi kata sandi.
          </p>
        </div>
        <Field className="mx-auto mb-8 w-[80%] md:mb-12">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <FormInput
              type="password"
              value={form.new_password}
              onChange={handleInputChange("new_password")}
              placeholder="Masukkan Kata Sandi"
              leftIcon={
                <KeyRound className="h-4 w-4 rotate-90 md:h-5 md:w-5" />
              }
            />
            <FormInput
              type="password"
              value={form.confirm_password}
              onChange={handleInputChange("confirm_password")}
              placeholder="Konfirmasi Kata Sandi"
              leftIcon={
                <KeyRound
                  size={20}
                  className="h-4 w-4 rotate-90 md:h-5 md:w-5"
                />
              }
            />
            <div className="mx-auto flex w-full flex-col space-y-12 pt-2 md:space-y-4">
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
            </div>
          </form>
        </Field>
      </div>
    </section>
  );
};

export default ResetPassword;
