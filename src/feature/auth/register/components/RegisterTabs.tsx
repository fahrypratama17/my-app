"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/component/ui/tabs";
import SPPGField from "@/feature/auth/register/components/SPPGField";
import MitraField from "@/feature/auth/register/components/MitraField";
import { useRegisterStore } from "@/shared/store/useRegisterStore";
import { Roles } from "@/shared/lib/auth/role";

export type TabType = "sppg" | "mitra";

type Props = {
  initialType: TabType;
};

const RegisterTabs = ({ initialType }: Props) => {
  const router = useRouter();
  const { setField } = useRegisterStore();

  useEffect(() => {
    setField("role", initialType === "sppg" ? Roles.sppg : Roles.supplier);
  }, [initialType, setField]);

  return (
    <Tabs
      key={initialType}
      value={initialType}
      onValueChange={(val) => {
        const nextType = val as TabType;
        setField("role", nextType === "sppg" ? Roles.sppg : Roles.supplier);
        router.push(`/register?type=${nextType}`);
      }}
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
  );
};

export default RegisterTabs;
