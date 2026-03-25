type Option = { label: string; value: string };

type Props = {
  label: React.ReactNode;
  value?: string;
  onChange: (val: string) => void;
  options: Option[];
};

const FormRadioGroup = ({ label, value, onChange, options }: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-2xl-bold text-green-900">{label}</h2>
      <div className="flex flex-col gap-7">
        {options.map((opt) => {
          const isSelected = value === opt.value;

          return (
            <div
              key={opt.value}
              className="flex items-center gap-7"
              onClick={() => onChange(opt.value)}
            >
              <div
                className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                  isSelected ? "bg-orange-500" : "bg-white"
                }`}
              />
              <h3 className="text-2xl-medium text-green-900">{opt.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormRadioGroup;
