import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Input } from "@/shared/component/ui/input";
import { Eye, KeyRound } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const RegisterSecond = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-[#C8C8C8]">
      <div className="mx-auto h-[90vh] w-full max-w-[40%] space-y-11 rounded-2xl bg-[#E9E9E9] p-10">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5"
            src={"/logo/logo.svg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <p className="text-[36px]">Selamat Datang!</p>
          <p className="w-[90%] text-center text-[18px]">
            Lengkapi data berikut untuk memulai perjalananmu bersama kami.
          </p>
        </div>
        <Field className="mx-auto mb-6 w-[80%]">
          <div className="space-y-2">
            <div className="relative">
              <Input className="px-10" placeholder="Masukkan Kata Sandi" />
              <KeyRound
                className="absolute top-3 left-3 rotate-90"
                width={20}
                height={20}
              />
              <Eye className="absolute top-3 right-3" width={20} height={20} />
            </div>
            <div className="relative">
              <Input className="px-10" placeholder="Konfirmasi Kata Sandi" />
              <KeyRound
                className="absolute top-3 left-3 rotate-90"
                width={20}
                height={20}
              />
              <Eye className="absolute top-3 right-3" width={20} height={20} />
            </div>
          </div>
        </Field>
        <div className="mx-auto flex w-[80%] flex-col gap-28 space-y-4">
          <div className="w-full gap-4">
            <Button
              className="w-full py-5 text-white"
              variant="default"
              size="default"
            >
              Daftar
            </Button>
          </div>
          <p className="mt-10 text-center">
            Sudah punya akun? <span className="font-bold">Masuk</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSecond;
