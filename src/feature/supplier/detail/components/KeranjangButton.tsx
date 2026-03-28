import { Button } from "@/shared/component/ui/button";
import { ShoppingBasket } from "lucide-react";

type Props = {
  showAll: boolean;
  onClick: () => void;
};

const KeranjangButton = ({ showAll, onClick }: Props) => {
  return (
    <Button
      className="flex w-[25%] cursor-pointer items-center justify-center rounded-[40px] bg-orange-600 py-6 text-xl font-bold hover:scale-105"
      onClick={onClick}
    >
      <ShoppingBasket className="h-12 w-12" />
      <p>Masukkan Keranjang</p>
    </Button>
  );
};

export default KeranjangButton;
