import { Button } from "@/shared/component/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonNextProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonNext = ({ href, onClick, children }: ButtonNextProps) => {
  return (
    <Button
      onClick={onClick}
      className="mt-12 mb-20 cursor-pointer rounded-[48px] border-2 border-orange-900 bg-orange-400 p-8 transition-transform hover:scale-105 active:translate-x-2 active:translate-y-2"
    >
      <Link className="flex items-center justify-center gap-2" href={href}>
        <p className="text-3xl-bold text-green-900">{children}</p>
        <div className="rounded-full bg-green-700 p-3 text-orange-400">
          <ArrowRight size={70} />
        </div>
      </Link>
    </Button>
  );
};

export default ButtonNext;
