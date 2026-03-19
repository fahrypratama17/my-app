"use client";

import { useRouter } from "next/navigation";
import Register from "@/feature/auth/register/components/Register";

type Props = { type?: string };
type TabType = "sppg" | "mitra";

const RegisterContainer = ({ type = "sppg" }: Props) => {
  const routerParams = useRouter();

  const validType: TabType = type === "mitra" ? "mitra" : "sppg";

  const handleChangeTab = (val: string) => {
    const nextType: TabType = val === "mitra" ? "mitra" : "sppg";
    routerParams.push(`/register?type=${nextType}`);
  };

  return <Register type={validType} onChangeTab={handleChangeTab} />;
};

export default RegisterContainer;
