import { Card, CardContent } from "@/shared/component/ui/card";

const Berhasil = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-green-50">
      <Card className="mx-auto w-[80%] border-3 border-green-900">
        <CardContent>
          <div className="grid grid-cols-2">
            <div className="text-center">
              <p>Pesanan berhasil dikirim!</p>
              <p>Terima kasih telah mempercayai layanan kami!</p>
              <p>Order ID: #ORD-MBG-7729</p>
            </div>
            <div className="bg-orange-600 text-center">Ini Gif</div>
          </div>
          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Berhasil;
