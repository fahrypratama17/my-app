import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Citrus, ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { useFormStore } from "@/shared/store/useFormStore";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";

const PertanyaanBuah = () => {
  const { answers, setAnswers } = useFormStore();

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader className="mb-8 flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Citrus className="text-orange-600" size={40} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl-bold text-green-900">Kategori Buah</p>
          <p className="text-lg-medium text-green-500">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <FormRadioGroup
          label="1. Asal Buah?"
          value={answers.buah?.asalBuah ?? ""}
          onChange={(val) => {
            setAnswers(
              "buah",
              "asalBuah",
              val as "petani" | "distributor" | "kebun",
            );
          }}
          options={[
            { label: "Petani Lokal", value: "petani" },
            { label: "Distributor", value: "distributor" },
            { label: "Kebun Sendiri", value: "kebun" },
          ]}
        />
        <FormRadioGroup
          label="2. Kondisi buah segar, tidak busuk, dan tidak rusak?"
          value={answers.buah?.buahSegar ?? ""}
          onChange={(val) => {
            setAnswers("buah", "buahSegar", val as "ya" | "tidak");
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <Card className="border-2 border-green-900 bg-green-600 p-12">
          <CardContent className="flex items-center gap-16">
            <div className="flex h-40 w-40 items-center justify-center rounded-[24px] border-2 border-dashed border-green-600 bg-orange-50 text-green-600">
              <ImageUp size={60} />
            </div>
            <div className="flex h-40 flex-col items-start justify-between">
              <div>
                <h1 className="text-2xl-bold text-orange-50">
                  Upload Foto Produk
                </h1>
                <p className="text-md-medium text-orange-50">
                  Format PNG atau JPG. Maksimum 2MB.
                </p>
              </div>

              <Button className="cursor-pointer rounded-[12px] border-2 border-green-800 bg-green-50 px-8 py-5 text-lg font-bold text-green-900 transition-transform duration-200 hover:scale-105">
                Pilih File
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default PertanyaanBuah;
