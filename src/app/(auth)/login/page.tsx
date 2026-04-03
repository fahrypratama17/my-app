import LoginContainer from "@/feature/auth/login/container/LoginContainer";

export const metadata = {
  title: "Pangantara - Login",
  description: "Form Identitas Mitra",
};

const page = () => {
  return (
    <>
      <LoginContainer />
    </>
  );
};

export default page;
