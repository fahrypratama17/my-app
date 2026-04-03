import { Button } from "@/shared/component/ui/button";
import { ChevronDown } from "lucide-react";

type Props = {
  showAll: boolean;
  onClick: () => void;
};

const TampilkanButton = ({ showAll, onClick }: Props) => {
  return (
    <Button
      className="flex w-[50%] cursor-pointer items-center justify-center rounded-[40px] bg-green-500 py-3 hover:scale-105 md:w-[25%] md:py-6"
      onClick={onClick}
    >
      <p className="text-[8px] font-bold md:text-xl">
        {showAll ? "Tampilkan sedikit" : "Tampilkan semuanya"}
      </p>
      <ChevronDown className="h-3 w-3 md:h-12 md:w-12" />
    </Button>
  );
};

export default TampilkanButton;
