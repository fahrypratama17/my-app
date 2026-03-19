import { Field } from "@/shared/component/ui/field";
import { FormInput } from "@/shared/component/FormInput";
import { ArrowRight, Mail, MapPin, Package } from "lucide-react";
import Link from "next/link";

const SPPGField = () => {
  return (
    <Field className="mx-auto w-full">
      <div className="mb-9 space-y-4">
        <FormInput
          type="text"
          placeholder="Masukkan Nama Dapur"
          leftIcon={<Package size={20} />}
        />
        <FormInput
          type="text"
          placeholder="Masukkan Alamat"
          leftIcon={<MapPin size={20} />}
        />
        <FormInput
          type="email"
          placeholder="Masukkan Email"
          leftIcon={<Mail size={20} />}
        />
      </div>

      <div className="mt-2 flex origin-right cursor-pointer items-center justify-end gap-2 transition-transform duration-200 hover:scale-105">
        <p className="text-sm-bold text-end text-green-900">Lanjutkan</p>
        <Link
          href="/password"
          className="rounded-full border bg-green-700 p-2 text-orange-400"
        >
          <ArrowRight width={20} height={20} />
        </Link>
      </div>
    </Field>
  );
};

export default SPPGField;
