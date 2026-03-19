"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Register from "@/feature/auth/register/components/Register";

type Props = { type?: string };
type TabType = "sppg" | "mitra";

const RegisterContainer = ({ type = "sppg" }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const typeFromUrl = searchParams.get("type");

  const tab: TabType = typeFromUrl === "mitra" ? "mitra" : "sppg";

  const handleChangeTab = (val: TabType) => {
    router.push(`/register?type=${val}`);
  };

  return <Register type={tab} onChangeTab={handleChangeTab} />;
};

export default RegisterContainer;
