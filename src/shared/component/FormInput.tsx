"use client";

import { useState } from "react";
import { Input } from "@/shared/component/ui/input";
import { Eye, EyeClosed } from "lucide-react";

interface FormInputProps {
  type?: string;
  placeholder: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const FormInput = ({
  type = "text",
  placeholder,
  leftIcon,
  rightIcon,
}: FormInputProps) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <Input
        type={isPassword ? (show ? "text" : "password") : type}
        placeholder={placeholder}
        className={`peer bg-white ring-2 transition-all duration-200 placeholder:font-medium ${leftIcon ? "px-4 placeholder-shown:px-10" : "px-4"} ${rightIcon || isPassword ? "pr-10" : ""}`}
      />

      {leftIcon && (
        <div className="pointer-events-none absolute top-3 left-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100">
          {leftIcon}
        </div>
      )}

      {isPassword ? (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute top-3 right-3 cursor-pointer text-green-900 transition hover:scale-110"
        >
          {show ? (
            <Eye className="text-[#A7A7A7]" size={20} />
          ) : (
            <EyeClosed className="text-[#A7A7A7]" size={20} />
          )}
        </button>
      ) : (
        rightIcon && (
          <button className="absolute top-3 right-3 text-[#A7A7A7]">
            {" "}
            {rightIcon}
          </button>
        )
      )}
    </div>
  );
};
