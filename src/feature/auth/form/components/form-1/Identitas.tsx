import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Store } from "lucide-react";
import { Field } from "@/shared/component/ui/field";
import { Input } from "@/shared/component/ui/input";
import { Label } from "@/shared/component/ui/label";

const Progress = () => {
  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8 pb-20">
      <CardHeader className="flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Store className="text-orange-600" size={40} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl-bold text-green-900">Identitas Bisnis</p>
          <p className="text-lg-medium text-green-500">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col py-8">
        <Field>
          <div className="space-y-12">
            <div className="flex flex-col gap-4">
              <Label
                htmlFor="nama"
                className="text-xl font-semibold text-green-500"
              >
                Nama Usaha <span className="text-[#FF4747]">*</span>
              </Label>
              <Input
                id="nama"
                className="rounded-[48px] bg-white px-6 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
                placeholder="Masukkan Nama Usaha"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label
                htmlFor="pemilik"
                className="text-xl font-semibold text-green-500"
              >
                Nama Pemilik Usaha<span className="text-[#FF4747]">*</span>
              </Label>
              <Input
                id="pemilik"
                className="rounded-[48px] bg-white px-6 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
                placeholder="Masukkan Nama Pemilik Usaha"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label
                htmlFor="alamat"
                className="text-xl font-semibold text-green-500"
              >
                Alamat Usaha <span className="text-[#FF4747]">*</span>
              </Label>
              <Input
                id="alamat"
                className="rounded-[48px] bg-white px-6 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
                placeholder="Masukkan Alamat Usaha"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label
                htmlFor="telepon"
                className="text-xl font-semibold text-green-500"
              >
                No HP Aktif <span className="text-[#FF4747]">*</span>
              </Label>
              <Input
                id="telepon"
                className="rounded-[48px] bg-white px-6 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
                placeholder="Masukkan No HP Aktif"
              />
            </div>
          </div>
        </Field>
      </CardContent>
    </Card>
  );
};

export default Progress;
