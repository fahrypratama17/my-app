import { Suspense } from "react";
import RegisterContainer from "@/feature/auth/register/container/RegisterContainer";
import Loading from "@/app/loading";

export const metadata = {
  title: "Pangantara - Register",
  description: "Daftarkan akun anda",
};

type PageProps = {
  searchParams: Promise<{ type?: string | string[] }>;
};

const Page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const typeParam = Array.isArray(params.type) ? params.type[0] : params.type;

  return (
    <Suspense fallback={<Loading />}>
      <RegisterContainer type={typeParam} />
    </Suspense>
  );
};

export default Page;
