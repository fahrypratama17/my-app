type Option = { label: string; value: string };

type Props = {
  label: React.ReactNode;
  value?: string;
  onChange: (val: string) => void;
  options: Option[];
};

const FormRadioGroup = ({ label, value, onChange, options }: Props) => {
  return (
    <div className="flex flex-col gap-4 md:gap-12">
      <h2 className="text-[10px] font-bold text-green-900 md:text-2xl">
        {label}
      </h2>
      <div className="flex flex-col gap-3 md:gap-7">
        {options.map((opt) => {
          const isSelected = value === opt.value;

          return (
            <div
              key={opt.value}
              className="flex items-center gap-3 md:gap-7"
              onClick={() => onChange(opt.value)}
            >
              <div
                className={`h-4 w-4 cursor-pointer rounded-full border border-green-900 md:h-8 md:w-8 md:border-2 ${
                  isSelected ? "bg-orange-500" : "bg-white"
                }`}
              />
              <h3 className="text-[8px] font-medium text-green-900 md:text-2xl">
                {opt.label}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormRadioGroup;
