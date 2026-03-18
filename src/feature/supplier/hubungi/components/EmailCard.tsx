import { Card, CardContent } from "@/shared/component/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";

const EmailCard = () => {
  return (
    <Card className="h-full max-h-90 w-full border-2 border-green-900 bg-orange-50 p-4 py-8">
      <CardContent className="flex h-full flex-col justify-between space-y-12">
        <div className="flex flex-col gap-5">
          <div className="w-[15%] rounded-[16px] bg-orange-500 p-4">
            <Mail className="text-green-600" />
          </div>
          <div className="flex w-[80%] flex-col gap-2">
            <h1 className="text-xl font-bold text-green-900">Kirim Email</h1>
            <p className="text-sm font-medium text-green-800">
              Untuk pertanyaan formal atau teknis yang mendalam. Kami akan
              membalas dalam waktu maksimal 24 jam.
            </p>
          </div>
        </div>

        <Link
          href=""
          className="transition-transform duration-200 hover:scale-105 active:translate-x-1 active:translate-y-1"
        >
          <Button className="w-full cursor-pointer bg-green-600 py-5 text-sm font-bold">
            Kirim Email
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EmailCard;
