"use client";

import { Button } from "@/shared/component/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ButtonNextProps {
  href?: string;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonNext = ({ href, onClick, disabled, children }: ButtonNextProps) => {
  const router = useRouter();

  const handleClick = async () => {
    await onClick?.();
    if (href) {
      router.push(href);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="mt-6 mb-10 w-[35%] cursor-pointer rounded-[48px] border-2 border-orange-900 bg-orange-400 p-2 transition-transform hover:scale-105 active:translate-x-2 active:translate-y-2 md:mt-12 md:mb-20 md:w-full md:max-w-xs md:p-8"
    >
      <div className="flex w-full items-center justify-evenly gap-2">
        <p className="text-[10px] font-bold text-green-900 md:text-3xl">
          {children}
        </p>
        <div className="rounded-full bg-green-700 p-0.5 text-orange-400 md:p-3">
          <ArrowRight className="h-2 w-2 md:h-18 md:w-18" />
        </div>
      </div>
    </Button>
  );
};

export default ButtonNext;
