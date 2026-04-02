"use client";

import { useState } from "react";
import { Input } from "@/shared/component/ui/input";
import { Eye, EyeClosed } from "lucide-react";

interface FormInputProps {
  type?: string;
  value?: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const FormInput = ({
  type = "text",
  value,
  placeholder,
  className,
  onChange,
  leftIcon,
  rightIcon,
}: FormInputProps) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <Input
        type={isPassword ? (show ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`peer bg-white py-3 text-[10px] ring-2 transition-all duration-200 placeholder:text-[10px] placeholder:font-medium md:py-5 md:text-[14px] md:placeholder:text-[14px] ${className} ${leftIcon ? "px-4 placeholder-shown:px-10" : "px-4"} ${rightIcon || isPassword ? "pr-10" : ""}`}
      />

      {leftIcon && (
        <div className="pointer-events-none absolute top-2 left-3 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100 md:top-3 md:left-3">
          {leftIcon}
        </div>
      )}

      {isPassword ? (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute top-2 right-3 cursor-pointer text-green-900 transition hover:scale-110 md:top-3 md:right-3"
        >
          {show ? (
            <Eye className="h-4 w-4 text-[#A7A7A7] md:h-5 md:w-5" size={20} />
          ) : (
            <EyeClosed
              className="h-4 w-4 text-[#A7A7A7] md:h-5 md:w-5"
              size={20}
            />
          )}
        </button>
      ) : (
        rightIcon && (
          <button className="absolute top-2 right-3 text-[#A7A7A7] md:top-3 md:right-3">
            {" "}
            {rightIcon}
          </button>
        )
      )}
    </div>
  );
};
