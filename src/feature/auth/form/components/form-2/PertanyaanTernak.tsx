import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Milk } from "lucide-react";
import { useFormStore } from "@/shared/store/useFormStore";
import PertanyaanTelur from "@/feature/auth/form/components/form-2/PertanyaanTelur";
import PertanyaanSusu from "@/feature/auth/form/components/form-2/PertanyaanSusu";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";

const PertanyaanTernak = () => {
  const { answers, setAnswers, resetAnswers } = useFormStore();

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-4 py-4 md:px-12 md:py-8">
      <CardHeader className="flex items-center justify-start gap-4 md:mb-8">
        <div className="rounded-xl bg-orange-50 p-2">
          <Milk className="h-4 w-4 text-orange-600 md:h-10 md:w-10" />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-[12px] font-bold text-green-900 md:text-3xl">
            Kategori Hasil Ternak
          </p>
          <p className="text-[8px] font-medium text-green-500 md:text-lg">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 md:gap-12">
        <FormRadioGroup
          label="1. Jenis hasil ternak yang dijual?"
          value={answers.ternak?.jenisTernak ?? ""}
          onChange={(val) => {
            resetAnswers();
            setAnswers("ternak", "jenisTernak", (val as "susu") || "ternak");
          }}
          options={[
            { label: "Telur", value: "telur" },
            { label: "Susu", value: "susu" },
          ]}
        />
        {answers.ternak?.jenisTernak === "telur" && <PertanyaanTelur />}
        {answers.ternak?.jenisTernak === "susu" && <PertanyaanSusu />}
      </CardContent>
    </Card>
  );
};

export default PertanyaanTernak;
