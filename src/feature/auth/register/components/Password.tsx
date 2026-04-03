"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Field } from "@/shared/component/ui/field";
import { KeyRound } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { FormInput } from "@/shared/component/auth/FormInput";
import { showPasswordToast } from "@/shared/component/toast";
import { useRegisterStore } from "@/shared/store/useRegisterStore";
import { useDebounce, useRegisterForm } from "@/hooks";
import { Spinner } from "@/shared/component/ui/spinner";
import { Roles } from "@/shared/lib/auth/role";

const Password = () => {
  const router = useRouter();
  const { password, confirmPassword, role, setField } = useRegisterStore();
  const { handleSubmit, isPending } = useRegisterForm();
  const debouncedPassword = useDebounce(password, 500);
  const debouncedConfirmPassword = useDebounce(confirmPassword, 500);

  useEffect(() => {
    if (!debouncedPassword && !debouncedConfirmPassword) {
      return;
    }

    if (debouncedConfirmPassword && !debouncedPassword) {
      showPasswordToast("passwordRequired");
      return;
    }

    if (debouncedPassword && !debouncedConfirmPassword) {
      return;
    }

    if (debouncedPassword && debouncedPassword.length < 8) {
      showPasswordToast("passwordMinLength");
      return;
    }

    if (debouncedPassword.length > 50) {
      showPasswordToast("passwordMaxLength");
      return;
    }

    if (
      debouncedConfirmPassword &&
      debouncedPassword !== debouncedConfirmPassword
    ) {
      showPasswordToast("passwordMismatch");
    }
  }, [debouncedPassword, debouncedConfirmPassword]);

  const onSubmit = () => {
    if (!password.trim()) {
      showPasswordToast("passwordRequired");
      return;
    }

    if (!confirmPassword.trim()) {
      showPasswordToast("confirmPasswordRequired");
      return;
    }

    if (password.length < 8) {
      showPasswordToast("passwordMinLength");
      return;
    }

    if (password.length > 50) {
      showPasswordToast("passwordMaxLength");
      return;
    }

    if (password !== confirmPassword) {
      showPasswordToast("passwordMismatch");
      return;
    }

    if (role === Roles.supplier) {
      router.push("/form-1");
      return;
    }

    handleSubmit();
  };

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
            Selamat Datang!
          </p>
          <p className="w-[90%] pt-2 text-center text-[10px] font-medium text-green-900 md:w-[80%] md:pt-4 md:text-sm">
            Lengkapi data berikut untuk memulai perjalananmu bersama kami.
          </p>
        </div>

        <Field className="mx-auto mb-8 w-[80%] md:mb-12">
          <div className="space-y-4">
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setField("password", e.target.value)}
              placeholder="Masukkan Kata Sandi"
              leftIcon={
                <KeyRound
                  size={20}
                  className="h-4 w-4 rotate-90 md:h-5 md:w-5"
                />
              }
            />
            <FormInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setField("confirmPassword", e.target.value)}
              placeholder="Konfirmasi Kata Sandi"
              leftIcon={
                <KeyRound
                  size={20}
                  className="h-4 w-4 rotate-90 md:h-5 md:w-5"
                />
              }
            />
          </div>
        </Field>

        <div className="mx-auto flex w-[80%] flex-col space-y-12 md:space-y-24">
          <div className="w-full gap-4">
            <Button
              onClick={onSubmit}
              disabled={isPending}
              className="h-8 w-full cursor-pointer rounded-[36px] border-2 border-green-900 bg-orange-600 text-[10px] text-white hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 md:py-5 md:text-sm"
            >
              {isPending ? (
                <>
                  <p>Memproses...</p> <Spinner />
                </>
              ) : (
                role === Roles.supplier ? "Lanjutkan" : "Daftar"
              )}
            </Button>
          </div>
          <p className="mt-2 text-center text-[10px] font-medium text-[#A9A9A9] md:text-[16px]">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="inline-block cursor-pointer font-bold text-green-900 transition-transform duration-200 hover:scale-105"
            >
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Password;
