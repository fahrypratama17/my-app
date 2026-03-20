import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Beef } from "lucide-react";
import { useFormStore } from "@/shared/store/useFormStore";
import PertanyaanAyamSapi from "@/feature/auth/form/components/form-2/PertanyaanAyamSapi";
import PertanyaanIkan from "@/feature/auth/form/components/form-2/PertanyaanIkan";
import FormRadioGroup from "@/feature/auth/form/components/form-2/FormRadioGroup";

const PertanyaanDaging = () => {
  const { answers, setAnswers, resetAnswers } = useFormStore();

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader className="mb-8 flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Beef className="text-orange-600" size={40} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl-bold text-green-900">Kategori Daging</p>
          <p className="text-lg-medium text-green-500">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-12">
        <FormRadioGroup
          label="1. Jenis daging yang dijual?"
          value={answers.jenisDaging ?? ""}
          onChange={(val) => {
            resetAnswers();
            setAnswers("jenisDaging", val as "ayam" | "sapi" | "ikan");
          }}
          options={[
            { label: "Ayam", value: "ayam" },
            { label: "Sapi", value: "sapi" },
            { label: "Ikan", value: "ikan" },
          ]}
        />
        {(answers.jenisDaging === "ayam" || answers.jenisDaging === "sapi") && (
          <PertanyaanAyamSapi />
        )}
        {answers.jenisDaging === "ikan" && <PertanyaanIkan />}
      </CardContent>
    </Card>
  );
};

export default PertanyaanDaging;
