import Progress from "@/shared/component/Progress";
import Identitas from "@/feature/auth/form/components/form-1/Identitas";
import ButtonPrev from "@/shared/component/auth/ButtonPrev";

const FormSection = () => {
  return (
    <>
      <div className="mx-auto w-[90%] pt-4 md:pt-20">
        <Progress />
        <p className="py-8 text-[10px] font-semibold text-green-900 md:text-2xl">
          Bagian ini diisi oleh semua calon mitra.
        </p>
        <Identitas />
        <div className="flex origin-right items-center justify-between">
          <ButtonPrev href="/register">Kembali</ButtonPrev>
        </div>
      </div>
    </>
  );
};

export default FormSection;
