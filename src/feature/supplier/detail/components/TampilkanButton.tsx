import { Button } from "@/shared/component/ui/button";
import { ChevronDown } from "lucide-react";

type Props = {
  showAll: boolean;
  onClick: () => void;
};

const TampilkanButton = ({ showAll, onClick }: Props) => {
  return (
    <Button
      className="flex w-[25%] cursor-pointer items-center justify-center rounded-[40px] bg-green-500 py-6 text-xl font-bold hover:scale-105"
      onClick={onClick}
    >
      <p>Tampilkan lebih banyak</p>
      <ChevronDown className="h-12 w-12" />
    </Button>
  );
};

export default TampilkanButton;
