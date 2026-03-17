import { Card } from "@/shared/component/ui/card";
import { Beef, Carrot, Citrus, Milk } from "lucide-react";
import { useFormStore } from "@/shared/store/useFormStore";

const categories = [
  { name: "Daging", icon: Beef },
  { name: "Sayur", icon: Carrot },
  { name: "Buah", icon: Citrus },
  { name: "Hasil Ternak", icon: Milk },
];

const Kategori = () => {
  const { category, setCategory, setStep } = useFormStore();

  return (
    <div className="mx-auto mb-12 grid h-[50%] w-[70%] grid-cols-4">
      {categories.map((item) => {
        const Icon = item.icon;
        const isActive = category === item.name;

        return (
          <div key={item.name} className="relative">
            <div className="absolute top-2 right-8 h-full w-full max-w-40 rounded-3xl border-2 border-green-900"></div>

            <Card
              onClick={() => {
                setCategory(item.name);
                setStep(3);
              }}
              className={`relative mx-auto flex w-full max-w-40 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-green-900 transition-all duration-200 ${
                isActive
                  ? "shadow-[6px_6px_0px_0px_var(--color-green-900)]"
                  : "border-green-900 bg-white"
              }`}
            >
              <div className="rounded-full bg-orange-600 p-4 text-orange-50">
                <Icon size={30} />
              </div>

              <p className="text-lg-semibold">{item.name}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Kategori;
