import { Suspense } from "react";
import RegisterContainer from "@/feature/auth/register/container/RegisterContainer";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterContainer />
    </Suspense>
  );
};

export default Page;
