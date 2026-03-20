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
      className="mt-12 mb-20 w-full max-w-xs cursor-pointer rounded-[48px] border-2 border-orange-900 bg-orange-400 p-8 transition-transform hover:scale-105 active:translate-x-2 active:translate-y-2"
    >
      <Link
        className="flex w-full items-center justify-evenly gap-2"
        href={href}
      >
        <div className="rounded-full bg-green-700 p-3 text-orange-400">
          <ArrowLeft size={70} />
        </div>
        <p className="text-3xl-bold text-green-900">{children}</p>
      </Link>
    </Button>
  );
};

export default ButtonPrev;
