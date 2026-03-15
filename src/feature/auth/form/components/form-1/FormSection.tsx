import Progress from "@/feature/auth/form/components/form-1/Progress";
import Identitas from "@/feature/auth/form/components/form-1/Identitas";
import Footer from "@/shared/component/Footer";
import { Button } from "@/shared/component/ui/button";
import { ArrowRight } from "lucide-react";

const FormSection = () => {
  return (
    <>
      <div className="mx-auto w-[90%] pt-20">
        <Progress />
        <p className="text-2xl-semibold py-8 text-green-900">
          Bagian ini diisi oleh semua calon mitra.
        </p>
        <Identitas />
        <div className="flex items-center justify-end">
          <Button className="mt-12 mb-20 flex items-center justify-center gap-2 rounded-[48px] border-2 border-orange-900 bg-orange-400 p-8">
            <p className="text-3xl-bold text-green-900">Lanjutkan</p>
            <div className="rounded-full bg-green-700 p-3 text-orange-400">
              <ArrowRight size={70} />
            </div>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormSection;
