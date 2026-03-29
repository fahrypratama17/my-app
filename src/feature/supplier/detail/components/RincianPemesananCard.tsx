import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { ShoppingCart, SendHorizontal } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

type Props = { onBayar: () => void };

const RincianPesananCard = ({ onBayar }: Props) => {
  return (
    <Card className="w-full rounded-[16px] border-2 border-green-900 py-0 md:rounded-[40px]">
      <CardHeader className="flex items-center gap-2 rounded-none bg-orange-400 px-4 py-4 text-green-900 md:gap-4 md:px-8">
        <ShoppingCart className="p-1 md:p-0" />
        <div>
          <p className="text-[12px] font-bold md:text-3xl">Daftar Pesanan</p>
          <p className="text-[10px] font-semibold md:text-lg">
            Order ID: #ORD-MBG-7729
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 px-4 pb-8 md:gap-8 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium md:text-xl">Subtotal</p>
          </div>
          <p className="text-[10px] font-bold text-green-900 md:text-xl">
            Rp 550.000
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium md:text-xl">
              Biaya Pengiriman
            </p>
          </div>
          <p className="text-[10px] font-bold text-green-900 md:text-xl">
            Rp 20.000
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium md:text-xl">
              Pajak (PPN 11%)
            </p>
          </div>
          <p className="text-[10px] font-bold text-green-900 md:text-xl">
            Rp 5.000
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-[6px] bg-green-800 px-2 py-1 text-green-50 md:mt-0 md:rounded-[12px] md:px-6 md:py-2">
          <p className="text-[10px] font-medium md:text-xl">Total</p>
          <p className="text-[12px] font-bold md:text-2xl">Rp 575.000</p>
        </div>
        <Button
          onClick={onBayar}
          className="mt-6 ml-auto flex w-[60%] cursor-pointer gap-4 rounded-[12px] border-2 border-green-900 bg-orange-50 py-4 text-[10px] font-bold text-green-900 hover:scale-105 md:py-6 md:text-2xl"
        >
          <div>
            <SendHorizontal className="p-1 md:p-0" />
          </div>
          <p>Bayar Sekarang</p>
        </Button>
        <p className="mx-auto mt-3 w-[80%] text-center text-[8px] font-medium text-[#B2B2B2] md:mt-6 md:text-sm">
          Dengan menekan tombol di atas, Anda menyetujui persyaratan transaksi
          Pangantara.
        </p>
      </CardContent>
    </Card>
  );
};

export default RincianPesananCard;
