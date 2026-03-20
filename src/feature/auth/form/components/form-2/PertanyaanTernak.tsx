import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Milk } from "lucide-react";
import { useFormStore } from "@/shared/store/useFormStore";
import PertanyaanTelur from "@/feature/auth/form/components/form-2/PertanyaanTelur";
import PertanyaanSusu from "@/feature/auth/form/components/form-2/PertanyaanSusu";
import FormRadioGroup from "@/feature/auth/form/components/form-2/FormRadioGroup";

const PertanyaanTernak = () => {
  const { answers, setAnswers, resetAnswers } = useFormStore();

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
      <CardContent className="flex flex-col gap-12">
        <FormRadioGroup
          label="1. Jenis hasil ternak yang dijual?"
          value={answers.jenisTernak ?? ""}
          onChange={(val) => {
            resetAnswers();
            setAnswers("jenisTernak", (val as "susu") || "ternak");
          }}
          options={[
            { label: "Telur", value: "telur" },
            { label: "Susu", value: "susu" },
          ]}
        />
        {answers.jenisTernak === "telur" && <PertanyaanTelur />}
        {answers.jenisTernak === "susu" && <PertanyaanSusu />}
      </CardContent>
    </Card>
  );
};

export default PertanyaanTernak;
