import { Button } from "@/shared/component/ui/button";
import { ShoppingBasket } from "lucide-react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const KeranjangButton = ({ onClick, disabled = false }: Props) => {
  return (
    <Button
      className="flex cursor-pointer items-center justify-center rounded-[40px] border border-green-900 bg-orange-600 hover:scale-105 md:w-[25%] md:py-6"
      onClick={onClick}
      disabled={disabled}
    >
      <p className="text-[8px] font-bold md:text-xl">Masukkan Keranjang</p>
      <ShoppingBasket className="h-12 w-12" />
    </Button>
  );
};

export default KeranjangButton;
