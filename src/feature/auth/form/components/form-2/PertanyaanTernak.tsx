import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Milk } from "lucide-react";
import { useFormStore } from "@/shared/store/useFormStore";
import PertanyaanTelur from "@/feature/auth/form/components/form-2/PertanyaanTelur";
import PertanyaanSusu from "@/feature/auth/form/components/form-2/PertanyaanSusu";

const PertanyaanTernak = () => {
  const jenisTernak = useFormStore((state) => state.answers.jenisTernak);
  const { answers, setAnswers } = useFormStore();
  const selected = answers.jenisTernak;

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader className="mb-8 flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Milk className="text-orange-600" size={40} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl-bold text-green-900">Kategori Hasil Ternak</p>
          <p className="text-lg-medium text-green-500">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            1. Jenis hasil ternak yang dijual?
          </h2>
          <div className="flex items-center gap-8">
            <div
              className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                selected === "telur" ? "bg-orange-500" : "bg-white"
              }`}
              onClick={() => setAnswers("jenisTernak", "telur")}
            ></div>
            <h3 className="text-2xl-medium text-green-900">Telur</h3>
          </div>
          <div className="flex items-center gap-8">
            <div
              className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                selected === "susu" ? "bg-orange-500" : "bg-white"
              }`}
              onClick={() => setAnswers("jenisTernak", "susu")}
            ></div>
            <h3 className="text-2xl-medium text-green-900">Susu</h3>
          </div>
          {jenisTernak === "telur" && <PertanyaanTelur />}
          {jenisTernak === "susu" && <PertanyaanSusu />}
        </div>
      </CardContent>
    </Card>
  );
};

export default PertanyaanTernak;
