import { Card } from "@/shared/component/ui/card";
import { Beef, Carrot, Citrus, Milk } from "lucide-react";

const Kategori = () => {
  return (
    <div className="mx-auto mb-12 grid h-[50%] w-[70%] grid-cols-4 items-center justify-center">
      <div className="relative">
        <div className="absolute top-2 right-8 h-full w-full max-w-40 rounded-3xl border-2 border-green-900"></div>
        <Card className="relative mx-auto flex w-full max-w-40 flex-col items-center justify-center rounded-3xl border-2 border-green-900">
          <div className="rounded-full bg-orange-600 p-4 text-orange-50">
            <Beef size={30} />
          </div>

          <p className="text-lg-semibold text-green-900">Daging</p>
        </Card>
      </div>

      <div className="relative">
        <div className="absolute top-2 right-8 h-full w-full max-w-40 rounded-3xl border-2 border-green-900"></div>
        <Card className="relative mx-auto flex w-full max-w-40 flex-col items-center justify-center rounded-3xl border-2 border-green-900">
          <div className="rounded-full bg-orange-600 p-4 text-orange-50">
            <Carrot size={30} />
          </div>

          <p className="text-lg-semibold text-green-900">Sayur</p>
        </Card>
      </div>

      <Card className="relative mx-auto flex w-full max-w-40 flex-col items-center justify-center rounded-3xl border-2 border-green-900 shadow-[6px_6px_0px_0px_var(--color-green-900)]">
        <div className="rounded-full bg-orange-600 p-4 text-orange-50">
          <Citrus size={30} />
        </div>

        <p className="text-lg-semibold text-green-900">Buah</p>
      </Card>

      <div className="relative">
        <div className="absolute top-2 right-8 h-full w-full max-w-40 rounded-3xl border-2 border-green-900"></div>
        <Card className="relative mx-auto flex w-full max-w-40 flex-col items-center justify-center rounded-3xl border-2 border-green-900">
          <div className="rounded-full bg-orange-600 p-4 text-orange-50">
            <Milk size={30} />
          </div>

          <p className="text-lg-semibold text-green-900">Hasil Ternak</p>
        </Card>
      </div>
    </div>
  );
};

export default Kategori;
