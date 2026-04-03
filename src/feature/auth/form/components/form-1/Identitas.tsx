import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Store } from "lucide-react";
import { Field } from "@/shared/component/ui/field";
import { FormInputGroup } from "@/shared/component/auth/FormInputGroup";
import { useFormStore } from "@/shared/store/useFormStore";
import { useRegisterStore } from "@/shared/store/useRegisterStore";
import { Roles } from "@/shared/lib/auth/role";

const Progress = () => {
  const identitas = useFormStore((state) => state.identitas);
  const setIdentitasField = useFormStore((state) => state.setIdentitasField);
  const role = useRegisterStore((state) => state.role);
  const isMitraFlow = role === Roles.supplier;

  const handleChange = (field: keyof typeof identitas, value: string) => {
    setIdentitasField(field, value);
  };

  return (
    <Card className="border-2 border-green-900 bg-green-50 px-4 py-4 pb-10 md:px-12 md:py-8 md:pb-20">
      <CardHeader className="flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Store className="h-4 w-4 text-orange-600 md:h-10 md:w-10" />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-[12px] font-bold text-green-900 md:text-3xl">
            Identitas Bisnis
          </p>
          <p className="text-[8px] font-medium text-green-500 md:text-lg">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:py-8">
        <Field>
          <div className="space-y-4 md:space-y-12">
            <div className="flex flex-col md:gap-6">
              <FormInputGroup
                label={
                  <div className="text-[10px] font-semibold text-green-500 md:text-xl">
                    Nama Usaha <span className="text-[#FF4747]">*</span>
                  </div>
                }
                value={identitas.store_name}
                onChange={(val) => handleChange("store_name", val)}
                placeholder="Masukkan Nama Usaha"
                disabled={isMitraFlow}
              />
            </div>
            <div className="flex flex-col md:gap-4">
              <FormInputGroup
                label={
                  <div className="text-[10px] font-semibold text-green-500 md:text-xl">
                    Nama Pemilik Usaha <span className="text-[#FF4747]">*</span>
                  </div>
                }
                value={identitas.owner_name}
                onChange={(val) => handleChange("owner_name", val)}
                placeholder="Masukkan Nama Pemilik Usaha"
              />
            </div>
            <div className="flex flex-col md:gap-4">
              <FormInputGroup
                label={
                  <div className="text-[10px] font-semibold text-green-500 md:text-xl">
                    Alamat Usaha <span className="text-[#FF4747]">*</span>
                  </div>
                }
                value={identitas.address}
                onChange={(val) => handleChange("address", val)}
                placeholder="Masukkan Alamat Usaha"
                disabled={isMitraFlow}
              />
            </div>
            <div className="flex flex-col md:gap-4">
              <FormInputGroup
                label={
                  <div className="text-[10px] font-semibold text-green-500 md:text-xl">
                    No HP Aktif <span className="text-[#FF4747]">*</span>
                  </div>
                }
                value={identitas.contact_number}
                onChange={(val) => handleChange("contact_number", val)}
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
