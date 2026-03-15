import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Input } from "@/shared/component/ui/input";
import { Button } from "@/shared/component/ui/button";
import { Eye, KeyRound, Mail } from "lucide-react";

const LoginSection = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-[85vh] w-full max-w-[35%] space-y-11 rounded-[40px] border-3 border-green-900 bg-green-50 p-10 py-16 shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5"
            src={"/logo/logo.svg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <p className="text-3xl font-bold text-green-900">Masuk ke Akunmu!</p>
          <p className="w-[70%] pt-4 text-center text-sm font-medium text-green-900">
            Silakan masukkan email dan kata sandi untuk melanjutkan.
          </p>
        </div>
        <Field className="mx-auto mb-6 w-[80%]">
          <div className="space-y-4">
            <div className="relative">
              <Input
                className="bg-white px-10 ring-2 placeholder:font-medium"
                placeholder="Masukkan Email"
              />
              <Mail className="absolute top-3 left-3" width={20} height={20} />
            </div>
            <div className="relative">
              <Input
                className="bg-white px-10 ring-2 placeholder:font-medium"
                placeholder="Masukkan Kata Sandi"
              />
              <KeyRound
                className="absolute top-3 left-3 rotate-90"
                width={20}
                height={20}
              />
              <Eye className="absolute top-3 right-3" width={20} height={20} />
            </div>
          </div>

          <p className="text-end text-sm font-medium text-[#A9A9A9]">
            Lupa kata sandi?
          </p>
        </Field>
        <div className="mx-auto w-[80%] space-y-4">
          <Button className="w-full rounded-[36px] border-2 border-green-900 bg-orange-600 py-5 text-white">
            Masuk
          </Button>
          <p className="mt-15 text-center text-[15px] font-medium text-[#A9A9A9]">
            Tidak punya akun?{" "}
            <span className="font-bold text-green-900">Daftar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
