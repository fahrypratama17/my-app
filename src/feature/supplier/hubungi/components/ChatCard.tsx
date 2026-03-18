import { Card, CardContent } from "@/shared/component/ui/card";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";

const ChatCard = () => {
  return (
    <Card className="h-full max-h-90 w-full border-2 border-green-900 bg-green-500 p-4 py-8">
      <CardContent className="flex h-full flex-col justify-between space-y-12">
        <div className="flex flex-col gap-5">
          <div className="w-[15%] rounded-[16px] bg-[#FFFFFF26] p-4">
            <MessageSquareText className="text-green-50" />
          </div>
          <div className="flex w-[80%] flex-col gap-2">
            <h1 className="text-xl font-bold text-white">Kirim Email</h1>
            <p className="text-sm font-medium text-green-50">
              Dapatkan respon cepat melalui WhatsApp atau Live Chat.
            </p>
          </div>
        </div>

        <Link
          href=""
          className="transition-transform duration-200 hover:scale-105 active:translate-x-1 active:translate-y-1"
        >
          <Button className="w-full cursor-pointer bg-orange-600 py-5 text-sm font-bold">
            Mulai Chat
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ChatCard;
