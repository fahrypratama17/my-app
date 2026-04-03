"use client";

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
    <div className="mx-auto mb-12 grid h-[50%] w-[90%] grid-cols-4 gap-4 md:w-[70%] md:gap-0">
      {categories.map((item) => {
        const Icon = item.icon;
        const isActive = category === item.name;

        return (
          <div
            key={item.name}
            className="relative mx-auto w-full max-w-20 md:max-w-40"
          >
            <div
              className={`absolute inset-0 translate-x-1 translate-y-1 rounded-xl md:translate-x-2 md:translate-y-2 md:rounded-3xl ${
                isActive ? "bg-green-900" : "border-2 border-green-900"
              }`}
            />

            <Card
              onClick={() => {
                setCategory(item.name);
                setStep(3);
              }}
              className={`relative flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-green-900 transition-all duration-200 active:translate-x-1 active:translate-y-1 md:gap-4 md:rounded-3xl md:active:translate-x-2 md:active:translate-y-2 ${
                isActive
                  ? "shadow-[3px_3px_0px_0px_var(--color-green-900)] md:shadow-[6px_6px_0px_0px_var(--color-green-900)]"
                  : "bg-white"
              }`}
            >
              <div className="rounded-full bg-orange-600 p-1 text-orange-50 md:p-4">
                <Icon className="h-4 w-4 md:h-7.5 md:w-7.5" />
              </div>

              <p className="text-[8px] font-semibold md:text-lg">{item.name}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Kategori;
