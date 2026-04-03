import { UserRound } from "lucide-react";
import ChatCard from "@/feature/mitra/customer-service/components/ChatCard";
import EmailCard from "@/feature/mitra/customer-service/components/EmailCard";

const CustomeServiceSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="hidden w-[90%] items-center justify-between px-12 py-7 md:flex">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Mitra
          </h1>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-orange-600 p-3">
              <UserRound className="text-white" />
            </div>
            <div>
              <p className="text-xl-bold text-green-800">Tani Jaya Makmur</p>
              <p className="text-sm-semibold text-green-400">Sup - 101</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[80vh] flex-col items-center justify-center gap-10 md:h-[120vh] md:gap-25">
        <div className="flex w-[80%] flex-col gap-2 text-center md:w-[60%] md:gap-4">
          <h1 className="text-[20px] font-bold text-green-800 md:text-5xl">
            Butuh Bantuan Lebih Lanjut?
          </h1>
          <p className="text-[10px] font-medium text-green-900 md:text-xl">
            Pilih metode komunikasi yang paling nyaman bagi Anda. Tim dukungan
            kami siap membantu operasional bisnis Anda.
          </p>
        </div>

        <div className="flex w-[90%] items-center justify-center gap-4 md:w-[60%] md:gap-6">
          <ChatCard />
          <EmailCard />
        </div>
      </div>
    </section>
  );
};

export default CustomeServiceSection;
