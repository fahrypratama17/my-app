"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/component/ui/tabs";
import SPPGField from "@/feature/auth/register/components/SPPGField";
import MitraField from "@/feature/auth/register/components/MitraField";

type TabType = "sppg" | "mitra";
type Props = { type: TabType; onChangeTab: (val: TabType) => void };

const Register = ({ type, onChangeTab }: Props) => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-[90vh] w-full max-w-[80%] space-y-4 rounded-[40px] border-3 border-green-900 bg-green-50 p-10 py-12 shadow-[4px_4px_0px_0px_var(--color-green-900)] lg:max-w-[35%]">
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
          key={type}
          value={type}
          onValueChange={(val) => onChangeTab(val as TabType)}
          className="mx-auto w-[80%]"
        >
          <TabsList className="text-sm-medium mb-12 flex w-full rounded-[32px] border-2 border-green-900 bg-[#E6E6E6] py-4.5 text-green-900">
            <TabsTrigger
              value="sppg"
              className="text-sm-medium flex-1 cursor-pointer rounded-[32px] py-3.5 text-green-900"
            >
              Tim SPPG
            </TabsTrigger>
            <TabsTrigger
              value="mitra"
              className="text-sm-medium flex-1 cursor-pointer rounded-[32px] py-3.5 text-green-900"
            >
              Mitra
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sppg">
            <SPPGField />
          </TabsContent>
          <TabsContent value="mitra">
            <MitraField />
          </TabsContent>
        </Tabs>

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
