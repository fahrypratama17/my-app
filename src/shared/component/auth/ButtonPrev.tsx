import { Button } from "@/shared/component/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ButtonPrevProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonPrev = ({ href, onClick, children }: ButtonPrevProps) => {
  return (
    <Button
      onClick={onClick}
      className="mt-6 mb-10 w-[35%] cursor-pointer rounded-[48px] border-2 border-orange-900 bg-orange-400 p-2 transition-transform hover:scale-105 active:translate-x-2 active:translate-y-2 md:mt-12 md:mb-20 md:w-full md:max-w-xs md:p-8"
    >
      <Link
        className="flex w-full items-center justify-evenly gap-2"
        href={href}
      >
        <div className="rounded-full bg-green-700 p-0.5 text-orange-400 md:p-3">
          <ArrowLeft className="h-2 w-2 md:h-18 md:w-18" />
        </div>
        <p className="text-[10px] font-bold text-green-900 md:text-3xl">
          {children}
        </p>
      </Link>
    </Button>
  );
};

export default ButtonPrev;
