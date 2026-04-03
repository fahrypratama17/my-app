import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";
import { useFormStore } from "@/shared/store/useFormStore";
import { FormInputGroup } from "@/shared/component/auth/FormInputGroup";
import { useFormValidation } from "@/hooks/use-form-validation";
import FormCheckboxGroup from "@/shared/component/auth/FormCheckboxGroup";
import { UploadBuktiType } from "@/feature/auth/form/types/type";
import { useImageUploadPreview } from "@/hooks/use-image-upload-preview";

const PertanyaanAyamSapi = () => {
  const { answers, setAnswers } = useFormStore();
  const { errors } = useFormValidation();
  const {
    uploadedFiles,
    previewUrls,
    fileInputRef,
    handleFileChange,
    openFilePicker,
  } = useImageUploadPreview();

  const isRphEnabled = answers.daging?.RPH === "ya";
  const isNkvEnabled = answers.daging?.NKV === "ya";

  return (
    <section className="bg-green-50 pb-8">
      <div className="flex flex-col gap-4 md:gap-12">
        <FormRadioGroup
          label="2. Apakah daging berasal dari Rumah Potong Hewan (RPH / RPHU)?"
          value={answers.daging?.RPH ?? ""}
          onChange={(val) => {
            setAnswers("daging", "RPH", val as "ya" | "tidak");
            if (val !== "ya") {
              setAnswers("daging", "namaRPH", "");
            }
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <FormInputGroup
          label={
            <div className="text-[10px] font-semibold text-green-900 md:text-xl">
              3. Nama RPH / RPHU asal produk?{" "}
              <span className="text-[#FF4747]">*</span>
            </div>
          }
          value={answers.daging?.namaRPH ?? ""}
          onChange={(val) => setAnswers("daging", "namaRPH", val)}
          disabled={!isRphEnabled}
          error={errors?.namaRPH?._errors?.[0]}
          placeholder="Masukkan Nama RPH / RPHU"
        />
        <FormRadioGroup
          label="4. Apakah unit usaha tersebut memiliki sertifikat Nomor Kontrol
            Veteriner (NKV)?"
          value={answers.daging?.NKV ?? ""}
          onChange={(val) => {
            setAnswers("daging", "NKV", val as "ya" | "tidak");
            if (val !== "ya") {
              setAnswers("daging", "nomorNKV", "");
            }
          }}
          options={[
            { label: "Ya", value: "ya" },
            { label: "Tidak", value: "tidak" },
          ]}
        />
        <FormInputGroup
          label={
            <div className="text-[10px] font-semibold text-green-900 md:text-xl">
              5. Nomor sertifikat Nomor Kontrol Veteriner (NKV)? (
              <span className="text-orange-800"> Jika diketahui</span> )
            </div>
          }
          value={answers.daging?.nomorNKV ?? ""}
          onChange={(val) => setAnswers("daging", "nomorNKV", val)}
          disabled={!isNkvEnabled}
          error={errors?.nomorNKV?._errors?.[0]}
          placeholder="Masukkan sertifikat NKV"
        />
        <FormCheckboxGroup
          label={
            <div className="text-[10px] font-semibold text-green-900 md:text-xl">
              6. Upload bukti asal produk (
              <span className="text-orange-800">pilih satu atau lebih</span>)
            </div>
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
        <Card className="border-2 border-green-900 bg-green-600 p-2 px-0 md:p-12">
          <CardContent className="flex items-center gap-4 md:gap-16">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[24px] border-2 border-dashed border-green-600 bg-orange-50 text-green-600 md:h-40 md:w-40">
                {previewUrls[0] ? (
                  <Image
                    src={previewUrls[0]}
                    alt="Preview produk 1"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                ) : (
                  <ImageUp className="h-8 w-8 md:h-15 md:w-15" />
                )}
              </div>
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

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <Button
                type="button"
                onClick={openFilePicker}
                className="h-6 cursor-pointer rounded-[8px] border border-green-800 bg-green-50 px-4 text-[8px] font-bold text-green-900 transition-transform duration-200 hover:scale-105 md:rounded-[12px] md:border-2 md:px-8 md:py-5 md:text-lg"
              >
                Pilih File
              </Button>
              {uploadedFiles.length > 0 && (
                <p className="mt-2 text-[8px] font-medium text-orange-50 md:text-sm">
                  {uploadedFiles.join(", ")}
                </p>
              )}
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
