import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { ShoppingCart, SendHorizontal } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const RincianPesananCard = () => {
  return (
    <Card className="w-full rounded-[40px] border-2 border-green-900 py-0">
      <CardHeader className="flex items-center gap-4 rounded-none bg-orange-400 px-8 py-4 text-green-900">
        <div>
          <ShoppingCart />
        </div>
        <div>
          <p className="text-3xl-bold">Daftar Pesanan</p>
          <p className="text-lg-semibold">Order ID: #ORD-MBG-7729</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 px-8 py-4 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl-medium">Subtotal</p>
          </div>
          <p className="text-xl-bold text-green-900">Rp 550.000</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl-medium">Biaya Pengiriman</p>
          </div>
          <p className="text-xl-bold text-green-900">Rp 20.000</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl-medium">Pajak (PPN 11%)</p>
          </div>
          <p className="text-xl-bold text-green-900">Rp 5.000</p>
        </div>
        <div className="flex items-center justify-between rounded-[12px] bg-green-800 px-6 py-2 text-green-50">
          <p className="text-xl-medium">Total</p>
          <p className="text-2xl-bold">Rp 575.000</p>
        </div>
        <Button className="text-2xl-bold mt-6 ml-auto flex w-[60%] cursor-pointer gap-4 rounded-[12px] border-2 border-green-900 bg-orange-50 py-6 hover:scale-105">
          <div>
            <SendHorizontal />
          </div>
          <p>Bayar Sekarang</p>
        </Button>
        <p className="text-sm-medium mx-auto mt-6 w-[80%] text-center text-[#B2B2B2]">
          Dengan menekan tombol di atas, Anda menyetujui persyaratan transaksi
          Pangantara.
        </p>
      </CardContent>
    </Card>
  );
};

export default RincianPesananCard;
