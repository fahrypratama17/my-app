import { useFormStore } from "@/shared/store/useFormStore";
import FormRadioGroup from "@/shared/component/auth/FormRadioGroup";

const PertanyaanIkan = () => {
  const { answers, setAnswers } = useFormStore();

  return (
    <section className="bg-green-50 pb-8">
      <FormRadioGroup
        label="2. Apakah ikan memiliki ciri insang berawarna merah, mata ikan
            jernih (tidak buram), daging kenyal dan kembali saat ditekan, dan
            tidak berbau busuk?"
        value={answers.daging?.ciriIkan ?? ""}
        onChange={(val) => {
          setAnswers("daging", "ciriIkan", val as "ya" | "tidak");
        }}
        options={[
          { label: "Ya", value: "ya" },
          { label: "Tidak", value: "tidak" },
        ]}
      />
    </section>
  );
};

export default PertanyaanIkan;
