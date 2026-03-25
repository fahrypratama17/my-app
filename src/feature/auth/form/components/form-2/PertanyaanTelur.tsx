import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { useFormStore } from "@/shared/store/useFormStore";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";
import { FormInputGroup } from "@/shared/component/auth/FormInputGroup";
import { UploadBuktiType } from "@/feature/auth/form/types/type";
import FormCheckboxGroup from "@/shared/component/auth/FormCheckboxGroup";

const PertanyaanTernak = () => {
  const { answers, setAnswers } = useFormStore();

  return (
    <section className="bg-green-50 pb-8">
      <div className="flex flex-col gap-8">
        <FormRadioGroup
          label="2. Sumber telur?"
          value={answers.ternak?.sumberTelur ?? ""}
          onChange={(val) =>
            setAnswers(
              "ternak",
              "sumberTelur",
              val as "sendiri" | "lokal" | "distributor",
            )
          }
          options={[
            { label: "Peternakan sendiri", value: "sendiri" },
            { label: "Peternakan lokal", value: "lokal" },
            { label: "Distributor", value: "distributor" },
          ]}
        />
        <FormInputGroup
          label={
            <>
              3. Nama peternakan asal telur?{" "}
              <span className="text-[#FF4747]">*</span>
            </>
          }
          value={answers.ternak?.namaPeternakan ?? ""}
          onChange={(val) => setAnswers("ternak", "namaPeternakan", val)}
          placeholder="Masukkan Nama Peternakan"
        />
        <FormRadioGroup
          label="4. Apakah unit usaha tersebut memiliki sertifikat Nomor Kontrol
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
            <>
              5. Nomor sertifikat Nomor Kontrol Veteriner (NKV)? (
              <span className="text-orange-800">Jika diketahui</span> )
            </>
          }
          value={answers.ternak?.nomorNKV ?? ""}
          onChange={(val) => setAnswers("ternak", "nomorNKV", val)}
          placeholder="Masukkan sertifikat NKV"
        />
        <FormCheckboxGroup
          label={
            <>
              6. Upload bukti asal produk (
              <span className="text-orange-800">pilih satu atau lebih</span>)
            </>
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
          label="7. Kondisi telur memiliki kulit utuh, tidak retak, dan bersih dari
            kotoran?"
          value={answers.ternak?.telurAman ?? ""}
          onChange={(val) =>
            setAnswers("ternak", "telurAman", val as "ya" | "tidak")
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

export default PertanyaanTernak;
