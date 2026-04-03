import Register from "@/feature/auth/register/components/Register";
import type { TabType } from "@/feature/auth/register/components/RegisterTabs";

type Props = { type?: string };

const RegisterContainer = ({ type = "sppg" }: Props) => {
  const tab: TabType = type === "mitra" ? "mitra" : "sppg";

  return <Register type={tab} />;
};

export default RegisterContainer;
