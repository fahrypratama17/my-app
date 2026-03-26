import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";
import { useFormStore } from "@/shared/store/useFormStore";
import { FormInputGroup } from "@/shared/component/auth/FormInputGroup";
import { UploadBuktiType } from "@/feature/auth/form/types/type";
import FormCheckboxGroup from "@/shared/component/auth/FormCheckboxGroup";

const PertanyaanSusu = () => {
  const { answers, setAnswers } = useFormStore();

  return (
    <section className="bg-green-50 pb-8">
      <div className="flex flex-col gap-4 md:gap-12">
        <FormRadioGroup
          label="2. Jenis susu yang dijual?"
          value={answers.ternak?.jenisSusu ?? ""}
          onChange={(val) =>
            setAnswers(
              "ternak",
              "jenisSusu",
              val as "segar" | "pasteurisasi" | "uht",
            )
          }
          options={[
            { label: "Susu segar", value: "segar" },
            { label: "Susu pasteurisasi", value: "pasteurisasi" },
            { label: "Susu UHT", value: "uht" },
          ]}
        />
        <FormRadioGroup
          label="3. Asal susu?"
          value={answers.ternak?.asalSusu ?? ""}
          onChange={(val) =>
            setAnswers(
              "ternak",
              "asalSusu",
              val as "sapi" | "koperasi" | "distributor",
            )
          }
          options={[
            { label: "Peternakan sapi perah", value: "sapi" },
            { label: "Koperasi susu", value: "koperasi" },
            { label: "Distributor", value: "distributor" },
          ]}
        />
        <FormInputGroup
          label={
            <div className="text-[10px] font-semibold text-green-900 md:text-xl">
              4. Nama unit usaha asal susu?{" "}
              <span className="text-[#FF4747]">*</span>
            </div>
          }
          value={answers.ternak?.usahaSusu ?? ""}
          onChange={(val) => setAnswers("ternak", "usahaSusu", val)}
          placeholder="Masukkan Nama Unit Usaha"
        />
        <FormRadioGroup
          label="5. Apakah unit usaha tersebut memiliki sertifikat Nomor Kontrol
            Veteriner (NKV)?"
          value={answers.ternak?.NKV ?? ""}
          onChange={(val) => {
            setAnswers("ternak", "NKV", val as "ya" | "tidak");
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <FormInputGroup
          label={
            <div className="text-[10px] font-semibold text-green-900 md:text-xl">
              6. Nomor sertifikat Nomor Kontrol Veteriner (NKV)? (
              <span className="text-orange-800">Jika diketahui</span> )
            </div>
          }
          value={answers.ternak?.nomorNKV ?? ""}
          onChange={(val) => setAnswers("ternak", "nomorNKV", val)}
          placeholder="Masukkan sertifikat NKV"
        />
        <FormCheckboxGroup
          label={
            <div className="text-[10px] font-semibold text-green-900 md:text-xl">
              6. Upload bukti asal produk (
              <span className="text-orange-800">pilih satu atau lebih</span>)
            </div>
          }
          value={answers.ternak?.uploadBukti ?? []}
          onChange={(val: UploadBuktiType) => {
            const current = answers.ternak?.uploadBukti ?? [];

            const exists = current.includes(val);

            const updated = exists
              ? current.filter((item) => item !== val)
              : [...current, val];

            setAnswers("ternak", "uploadBukti", updated);
          }}
          options={[
            {
              label: "Sertifikat Nomor Kontrol Veteriner (NKV)",
              value: "NKV",
            },
            { label: "Invoice pembelian", value: "invoice" },
            { label: "Surat kerja sama", value: "sks" },
            { label: "Foto label produk", value: "fotlab" },
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
        <FormRadioGroup
          label="8. Apakah susu tanpa tambahan gula, kemasan tidak rusak, dan
            disimpan sesuai suhu yang dianjurkan?"
          value={answers.ternak?.susuAman ?? ""}
          onChange={(val) =>
            setAnswers("ternak", "susuAman", val as "ya" | "tidak")
          }
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
      </div>
    </section>
  );
};

export default PertanyaanSusu;
