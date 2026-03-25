type Option<T extends string> = {
  label: string;
  value: T;
};

type Props<T extends string> = {
  label: React.ReactNode;
  value: T[];
  onChange: (val: T) => void;
  options: Option<T>[];
};

const FormCheckboxGroup = <T extends string>({
  label,
  value,
  onChange,
  options,
}: Props<T>) => {
  const isSelected = (val: T) => value.includes(val);

  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-2xl-bold text-green-900">{label}</h2>
      <div className="flex flex-col gap-7">
        {options.map((opt) => {
          const selected = isSelected(opt.value);

          return (
            <div
              key={opt.value}
              className="flex items-center gap-7"
              onClick={() => onChange(opt.value)}
            >
              <div
                className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                  selected ? "bg-orange-500" : "bg-white"
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

export default FormCheckboxGroup;
