import RegisterContainer from "@/feature/auth/register/container/RegisterContainer";

type Props = {
  searchParams: {
    type?: string;
  };
};

const page = ({ searchParams }: Props) => {
  return <RegisterContainer type={searchParams.type} />;
};

export default page;
