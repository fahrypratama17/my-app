import { Input } from "@/shared/component/ui/input";

type FormInputProps = {
  label: React.ReactNode;
  placeholder: string;
};

export const FormInputProduct = ({ label, placeholder }: FormInputProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-md font-bold text-green-700">{label}</div>
      <Input
        placeholder={placeholder}
        className="bg-white py-3 text-[10px] ring-2 transition-all duration-200 placeholder:text-[10px] placeholder:font-medium md:py-5 md:text-[14px] md:placeholder:text-[14px]"
      />
    </div>
  );
};
