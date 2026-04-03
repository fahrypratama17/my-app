import CustomerServiceContainer from "@/feature/mitra/customer-service/container/CustomerServiceContainer";

export const metadata = {
  title: "Supplier - Customer Service",
  description: "Customer Service",
};

const page = () => {
  return <CustomerServiceContainer />;
};

export default page;
