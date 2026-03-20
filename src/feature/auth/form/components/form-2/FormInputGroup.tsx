import { Input } from "@/shared/component/ui/input";

type Props = {
  label: React.ReactNode;
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const FormInputGroup = ({
  label,
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl-bold text-green-900">{label}</h2>
      <Input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-[48px] bg-white px-4 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
      />
    </div>
  );
};
