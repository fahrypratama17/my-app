"use client";
import { useFormStore } from "@/shared/store/useFormStore";
import Progress from "@/shared/component/Progress";
import Kategori from "@/feature/auth/form/components/form-2/Kategori";
import ButtonNext from "@/feature/auth/form/components/form-2/ButtonNext";
import PertanyaanSayur from "@/feature/auth/form/components/form-2/PertanyaanSayur";
import PertanyaanBuah from "@/feature/auth/form/components/form-2/PertanyaanBuah";
import PertanyaanTernak from "@/feature/auth/form/components/form-2/PertanyaanTernak";
import PertanyaanDaging from "@/feature/auth/form/components/form-2/PertanyaanDaging";
import ButtonPrev from "@/feature/auth/form/components/form-2/ButtonPrev";

const FormSection = () => {
  const { category } = useFormStore();
  const setStep = useFormStore((state) => state.setStep);
  const step = useFormStore((state) => state.step);
  const { isQuestionOpen } = useFormStore();

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

        <div className="flex origin-right items-center justify-between">
          <ButtonPrev
            onClick={() => setStep(isQuestionOpen ? step - 2 : step - 1)}
            href="/form-1"
          >
            Kembali
          </ButtonPrev>
          <ButtonNext href="/form-2">Lanjutkan</ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
