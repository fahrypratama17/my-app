import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";
import { useFormStore } from "@/shared/store/useFormStore";
import { FormInputGroup } from "@/shared/component/auth/FormInputGroup";
import { useFormValidation } from "@/hooks/use-form-validation";
import FormCheckboxGroup from "@/shared/component/auth/FormCheckboxGroup";
import { UploadBuktiType } from "@/feature/auth/form/types/type";

const PertanyaanAyamSapi = () => {
  const { answers, setAnswers } = useFormStore();
  const { errors } = useFormValidation();

  return (
    <section className="bg-green-50 pb-8">
      <div className="flex flex-col gap-12">
        <FormRadioGroup
          label="2. Apakah daging berasal dari Rumah Potong Hewan (RPH / RPHU)?"
          value={answers.daging?.RPH ?? ""}
          onChange={(val) => {
            setAnswers("daging", "RPH", val as "ya" | "tidak");
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <FormInputGroup
          label={
            <>
              3. Nama RPH / RPHU asal produk?{" "}
              <span className="text-[#FF4747]">*</span>
            </>
          }
          value={answers.daging?.namaRPH ?? ""}
          onChange={(val) => setAnswers("daging", "namaRPH", val)}
          placeholder="Masukkan Nama RPH / RPHU"
        />
        <FormRadioGroup
          label="4. Apakah unit usaha tersebut memiliki sertifikat Nomor Kontrol
            Veteriner (NKV)?"
          value={answers.daging?.NKV ?? ""}
          onChange={(val) => {
            setAnswers("daging", "NKV", val as "ya" | "tidak");
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <FormInputGroup
          label={
            <>
              5. Nomor sertifikat Nomor Kontrol Veteriner (NKV)? (
              <span className="text-orange-800">Jika diketahui</span> )
            </>
          }
          value={answers.daging?.nomorNKV ?? ""}
          onChange={(val) => setAnswers("daging", "nomorNKV", val)}
          error={errors?.nomorNKV?._errors?.[0]}
          placeholder="Masukkan sertifikat NKV"
        />
        <FormCheckboxGroup
          label={
            <>
              6. Upload bukti asal produk (
              <span className="text-orange-800">pilih satu atau lebih</span>)
            </>
          }
          value={answers.daging?.uploadBukti ?? []}
          onChange={(val: UploadBuktiType) => {
            const current = answers.daging?.uploadBukti ?? [];

            const exists = current.includes(val);

            const updated = exists
              ? current.filter((item) => item !== val)
              : [...current, val];

            setAnswers("daging", "uploadBukti", updated);
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
        <FormRadioGroup
          label="7. Apakah daging dalam kondisi segar saat dijual?"
          value={answers.daging?.dagingSegar ?? ""}
          onChange={(val) => {
            setAnswers("daging", "dagingSegar", val as "ya" | "tidak");
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <FormRadioGroup
          label="8. Apakah daging berwarna merah cerah, tidak berbau busuk, dan tidak
            terdapat darah pada permukaan?"
          value={answers.daging?.dagingAman ?? ""}
          onChange={(val) => {
            setAnswers("daging", "dagingAman", val as "ya" | "tidak");
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
      </div>
    </section>
  );
};

export default PertanyaanAyamSapi;
