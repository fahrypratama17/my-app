import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Citrus, ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { useFormStore } from "@/shared/store/useFormStore";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";

const PertanyaanBuah = () => {
  const { answers, setAnswers } = useFormStore();

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-4 py-4 md:px-12 md:py-8">
      <CardHeader className="flex items-center justify-start gap-4 md:mb-8">
        <div className="rounded-xl bg-orange-50 p-2">
          <Citrus className="h-4 w-4 text-orange-600 md:h-10 md:w-10" />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-[12px] font-bold text-green-900 md:text-3xl">
            Kategori Buah
          </p>
          <p className="text-[8px] font-medium text-green-500 md:text-lg">
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
        <Card className="border-2 border-green-900 bg-green-600 p-2 px-0 md:p-12">
          <CardContent className="flex items-center gap-4 md:gap-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border-2 border-dashed border-green-600 bg-orange-50 text-green-600 md:h-40 md:w-40">
              <ImageUp className="h-8 w-8 md:h-15 md:w-15" />
            </div>
            <div className="flex h-20 flex-col items-start justify-between md:h-40">
              <div>
                <h1 className="text-[10px] font-bold text-orange-50 md:text-2xl">
                  Upload Foto Produk
                </h1>
                <p className="text-[8px] font-medium text-orange-50 md:text-[16px]">
                  Format PNG atau JPG. Maksimum 2MB.
                </p>
              </div>

              <Button className="h-6 cursor-pointer rounded-[8px] border border-green-800 bg-green-50 px-4 text-[8px] font-bold text-green-900 transition-transform duration-200 hover:scale-105 md:rounded-[12px] md:border-2 md:px-8 md:py-5 md:text-lg">
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
