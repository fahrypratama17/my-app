import { Card, CardContent } from "@/shared/component/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";

const EmailCard = () => {
  return (
    <Card className="h-full max-h-70 w-full border-2 border-green-900 bg-orange-50 md:h-full md:max-h-90 md:p-4 md:py-8">
      <CardContent className="flex h-full flex-col justify-between space-y-12">
        <div className="flex flex-col gap-5">
          <div className="w-fit justify-center rounded-[8px] bg-orange-500 px-2 py-2 md:rounded-[16px] md:px-4 md:py-4">
            <Mail className="h-3 w-3 text-green-600 md:h-6 md:w-6" />
          </div>
          <div className="flex flex-col gap-2 md:w-[80%]">
            <h1 className="text-[10px] font-bold text-green-900 md:text-xl">
              Kirim Email
            </h1>
            <p className="text-[8px] font-medium text-green-800 md:text-sm">
              Untuk pertanyaan formal atau teknis yang mendalam. Kami akan
              membalas dalam waktu maksimal 24 jam.
            </p>
          </div>
        </div>

        <Link
          href=""
          className="transition-transform duration-200 hover:scale-105 active:translate-x-1 active:translate-y-1"
        >
          <Button className="h-6 w-full cursor-pointer bg-green-600 py-1 text-[10px] font-bold md:py-5 md:text-sm">
            Kirim Email
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EmailCard;
