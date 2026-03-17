import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Beef } from "lucide-react";
import { useFormStore } from "@/shared/store/useFormStore";
import PertanyaanAyamSapi from "@/feature/auth/form/components/form-2/PertanyaanAyamSapi";
import PertanyaanIkan from "@/feature/auth/form/components/form-2/PertanyaanIkan";

const PertanyaanDaging = () => {
  const jenisDaging = useFormStore((state) => state.answers.jenisDaging);
  const { answers, setAnswers } = useFormStore();
  const selected = answers.jenisDaging;

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
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            1. Jenis daging yang dijual?
          </h2>
          <div className="flex items-center gap-8">
            <div
              className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                selected === "ayam" ? "bg-orange-500" : "bg-white"
              }`}
              onClick={() => setAnswers("jenisDaging", "ayam")}
            ></div>
            <h3 className="text-2xl-medium text-green-900">Ayam</h3>
          </div>
          <div className="flex items-center gap-8">
            <div
              className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                selected === "sapi" ? "bg-orange-500" : "bg-white"
              }`}
              onClick={() => setAnswers("jenisDaging", "sapi")}
            ></div>
            <h3 className="text-2xl-medium text-green-900">Sapi</h3>
          </div>
          <div className="flex items-center gap-8">
            <div
              className={`h-8 w-8 cursor-pointer rounded-full border-2 border-green-900 ${
                selected === "ikan" ? "bg-orange-500" : "bg-white"
              }`}
              onClick={() => setAnswers("jenisDaging", "ikan")}
            ></div>
            <h3 className="text-2xl-medium text-green-900">Ikan</h3>
          </div>
          {(jenisDaging === "ayam" || jenisDaging === "sapi") && (
            <PertanyaanAyamSapi />
          )}
          {jenisDaging === "ikan" && <PertanyaanIkan />}
        </div>
      </CardContent>
    </Card>
  );
};

export default PertanyaanDaging;
