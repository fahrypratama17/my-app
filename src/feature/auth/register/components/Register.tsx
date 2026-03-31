"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section className="flex h-screen items-center justify-center bg-[#F4F4F4]">
      <div className="mx-auto h-auto w-full max-w-[90%] space-y-4 rounded-[40px] border-3 border-green-900 bg-green-50 p-4 py-6 shadow-[2px_2px_0px_0px_var(--color-green-900)] md:h-[90vh] md:max-w-[35%] md:p-10 md:py-12 md:shadow-[4px_4px_0px_0px_var(--color-green-900)]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-5 h-7 w-6 md:h-14 md:w-14"
            src={"/logo/logo.svg"}
            alt={"logo"}
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
        <Tabs
          key={type}
          value={type}
          onValueChange={(val) => onChangeTab(val as TabType)}
          className="mx-auto w-[80%]"
        >
          <TabsList className="mb-6 flex w-full rounded-[32px] border-2 border-green-900 bg-[#E6E6E6] py-2 text-[8px] font-medium text-green-900 md:mb-12 md:py-4.5 md:text-sm">
            <TabsTrigger
              value="sppg"
              className="flex-1 cursor-pointer rounded-[32px] py-2.5 text-[8px] font-medium text-green-900 md:py-3.5 md:text-sm"
            >
              Tim SPPG
            </TabsTrigger>
            <TabsTrigger
              value="mitra"
              className="flex-1 cursor-pointer rounded-[32px] py-2.5 text-[8px] font-medium text-green-900 md:py-3.5 md:text-sm"
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

export default Register;
