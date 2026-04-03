import Progress from "@/shared/component/Progress";
import FormSectionInteractive from "@/feature/auth/form/components/form-2/FormSectionInteractive";
import Kategori from "@/feature/auth/form/components/form-2/Kategori";

const FormSection = () => {
  return (
    <>
      <div className="mx-auto w-[90%] pt-4 md:pt-20">
        <Progress />
        <p className="py-8 text-[10px] font-semibold text-green-900 md:text-2xl">
          Calon mitra memilih kategori yang sesuai dengan yang dijual
        </p>

        <Kategori />
        <FormSectionInteractive />
      </div>
    </>
  );
};

export default FormSection;
