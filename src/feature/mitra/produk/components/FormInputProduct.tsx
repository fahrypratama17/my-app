import { Input } from "@/shared/component/ui/input";

type FormInputProps = {
  label: React.ReactNode;
  placeholder: string;
};

export const FormInputProduct = ({ label, placeholder }: FormInputProps) => {
  return (
    <div className="flex w-full flex-col gap-1 md:gap-4">
      <div className="text-[8px] font-bold text-green-700 md:text-[16px]">
        {label}
      </div>
      <Input
        placeholder={placeholder}
        className="h-6 rounded-lg bg-white py-2 text-[8px] ring-1 transition-all duration-200 placeholder:text-[8px] placeholder:font-medium md:rounded-2xl md:py-5 md:text-[14px] md:ring-2 md:placeholder:text-[14px]"
      />
    </div>
  );
};
