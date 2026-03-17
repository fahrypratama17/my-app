"use client";
import { useFormStore } from "@/shared/store/useFormStore";
import Progress from "@/feature/auth/form/components/Progress";
import Kategori from "@/feature/auth/form/components/form-2/Kategori";
import ButtonNext from "@/feature/auth/form/components/ButtonNext";
import PertanyaanSayur from "@/feature/auth/form/components/form-2/sayur/PertanyaanSayur";
import PertanyaanBuah from "@/feature/auth/form/components/form-2/buah/PertanyaanBuah";
import PertanyaanTernak from "@/feature/auth/form/components/form-2/ternak/1/PertanyaanTernak";
import PertanyaanDaging from "@/feature/auth/form/components/form-2/daging/1/PertanyaanDaging";

const FormSection = () => {
  const setStep = useFormStore((state) => state.setStep);
  const { category } = useFormStore();

  return (
    <>
      <div className="mx-auto w-[90%] pt-20">
        <Progress />
        <p className="text-2xl-semibold py-8 text-green-900">
          Calon mitra memilih kategori yang sesuai dengan yang dijual
        </p>

        <Kategori />

        {category === "Daging" && <PertanyaanDaging />}
        {category === "Sayur" && <PertanyaanSayur />}
        {category === "Buah" && <PertanyaanBuah />}
        {category === "Hasil Ternak" && <PertanyaanTernak />}

        <div className="flex origin-right items-center justify-end">
          <ButtonNext href="/form-2">Lanjutkan</ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
