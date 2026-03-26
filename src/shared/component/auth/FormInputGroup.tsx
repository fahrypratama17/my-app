import { Input } from "@/shared/component/ui/input";

type Props = {
  label: React.ReactNode;
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
};

export const FormInputGroup = ({
  label,
  value,
  onChange,
  placeholder,
  error,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h2 className="text-2xl font-bold text-green-900">{label}</h2>
      <Input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-[48px] bg-white px-4 py-2 text-[10px] ring-2 placeholder:text-[10px] placeholder:font-medium placeholder:text-[#A7A7A7] md:py-6 md:placeholder:text-[14px]"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
