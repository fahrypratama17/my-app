import ChatCard from "@/feature/supplier/hubungi/components/ChatCard";
import EmailCard from "@/feature/supplier/hubungi/components/EmailCard";

const HubungiSection = () => {
  return (
    <section className="flex h-[100vh] flex-col items-center justify-center gap-10 bg-green-50 md:h-[130vh] md:gap-25">
      <div className="flex w-[80%] flex-col gap-2 text-center md:w-[45%] md:gap-4">
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
    </section>
  );
};

export default HubungiSection;
