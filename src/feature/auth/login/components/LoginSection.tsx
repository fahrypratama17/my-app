import Image from "next/image";
import { Field } from "@/shared/component/ui/field";
import { Input } from "@/shared/component/ui/input";
import { Button } from "@/shared/component/ui/button";
import { Eye, KeyRound, Mail } from "lucide-react";

const LoginSection = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-[#C8C8C8]">
      <div className="mx-auto h-[85vh] w-full max-w-[40%] space-y-11 rounded-2xl bg-[#E9E9E9] p-10">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5"
            src={"/logo/logo.svg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <p className="text-[36px]">Masuk ke Akunmu!</p>
          <p className="text-[18px]">
            Silakan masukkan email dan kata sandi untuk melanjutkan.
          </p>
        </div>
        <Field className="mx-auto mb-6 w-[80%]">
          <div className="space-y-2">
            <div className="relative">
              <Input className="px-10" placeholder="Masukkan Email" />
              <Mail className="absolute top-3 left-3" width={20} height={20} />
            </div>
            <div className="relative">
              <Input className="px-10" placeholder="Masukkan Kata Sandi" />
              <KeyRound
                className="absolute top-3 left-3 rotate-90"
                width={20}
                height={20}
              />
              <Eye className="absolute top-3 right-3" width={20} height={20} />
            </div>
          </div>

          <p className="text-end text-[14px]">Lupa kata sandi?</p>
        </Field>
        <div className="mx-auto w-[80%] space-y-4">
          <Button
            className="w-full py-5 text-white"
            variant="default"
            size="default"
          >
            Masuk
          </Button>
          <p className="text-center">Atau lanjutkan dengan</p>
          <div className="grid w-full grid-cols-3 gap-4">
            <Button
              className="py-5 text-white"
              variant="default"
              size="default"
            >
              <Image
                src={"/icon/google.svg"}
                alt={"google"}
                width={15}
                height={15}
              />
            </Button>
            <Button
              className="py-5 text-white"
              variant="default"
              size="default"
            >
              <Image
                src={"/icon/facebook.svg"}
                alt={"google"}
                width={20}
                height={20}
              />
            </Button>
            <Button
              className="py-5 text-white"
              variant="default"
              size="default"
            >
              <Image
                src={"/icon/apple.svg"}
                alt={"google"}
                width={15}
                height={15}
              />
            </Button>
          </div>
          <p className="mt-10 text-center">
            Tidak punya akun? <span className="font-bold">Daftar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
