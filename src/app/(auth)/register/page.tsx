import { Suspense } from "react";
import RegisterContainer from "@/feature/auth/register/container/RegisterContainer";
import Loading from "@/app/loading";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RegisterContainer />
    </Suspense>
  );
};

export default Page;
