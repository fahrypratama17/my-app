import { Field } from "@/shared/component/ui/field";
import { FormInput } from "@/shared/component/auth/FormInput";
import { ArrowRight, Mail, MapPin, Package } from "lucide-react";
import { useRouter } from "next/navigation";
import { showRegisterRequiredToast } from "@/shared/component/toast";
import { useRegisterStore } from "@/shared/store/useRegisterStore";
import { useFormStore } from "@/shared/store/useFormStore";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MitraField = () => {
  const router = useRouter();
  const { name, email, address, setField } = useRegisterStore();
  const setMitraFormSubmitted = useFormStore((state) => state.setMitraFormSubmitted);
  const setIdentitasField = useFormStore((state) => state.setIdentitasField);

  const onContinue = () => {
    if (!name.trim()) {
      showRegisterRequiredToast("nameRequired");
      return;
    }

    if (!address.trim()) {
      showRegisterRequiredToast("addressRequired");
      return;
    }

    if (!email.trim()) {
      showRegisterRequiredToast("emailRequired");
      return;
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      showRegisterRequiredToast("emailInvalid");
      return;
    }

    // Prefill form-1 data from register step for mitra flow.
    setIdentitasField("store_name", name.trim());
    setIdentitasField("address", address.trim());

    setMitraFormSubmitted(false);
    router.push("/password");
  };

  return (
    <Field className="mx-auto w-full">
      <div className="space-y-4 md:mb-9">
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setField("name", e.target.value)}
          placeholder="Masukkan Nama Toko"
          leftIcon={<Package size={20} className="h-4 w-4 md:h-5 md:w-5" />}
        />
        <FormInput
          type="text"
          value={address}
          onChange={(e) => setField("address", e.target.value)}
          placeholder="Masukkan Alamat"
          leftIcon={<MapPin size={20} className="h-4 w-4 md:h-5 md:w-5" />}
        />
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setField("email", e.target.value)}
          placeholder="Masukkan Email"
          leftIcon={<Mail size={20} className="h-4 w-4 md:h-5 md:w-5" />}
        />
      </div>

      <div className="mt-2 flex origin-right cursor-pointer items-center justify-end gap-2 transition-transform duration-200 hover:scale-105">
        <p className="text-end text-[8px] font-bold text-green-900 md:text-sm">
          Lanjutkan
        </p>
        <button
          type="button"
          onClick={onContinue}
          className="cursor-pointer rounded-full border bg-green-700 p-1 text-orange-400 md:p-2"
          aria-label="Lanjutkan ke form password"
        >
          <ArrowRight
            width={20}
            height={20}
            className="h-3 w-3 md:h-5 md:w-5"
          />
        </button>
      </div>
    </Field>
  );
};

export default MitraField;
