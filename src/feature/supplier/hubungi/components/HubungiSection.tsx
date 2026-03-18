import ChatCard from "@/feature/supplier/hubungi/components/ChatCard";
import EmailCard from "@/feature/supplier/hubungi/components/EmailCard";

const HubungiSection = () => {
  return (
    <section className="flex h-[100vh] flex-col items-center justify-center gap-25 bg-green-50">
      <div className="flex w-[45%] flex-col gap-4 text-center">
        <h1 className="text-5xl-bold text-green-800">
          Butuh Bantuan Lebih Lanjut?
        </h1>
        <p className="text-xl-medium text-green-900">
          Pilih metode komunikasi yang paling nyaman bagi Anda. Tim dukungan
          kami siap membantu operasional bisnis Anda.
        </p>
      </div>

      <div className="flex w-[60%] items-center justify-center gap-6">
        <ChatCard />
        <EmailCard />
      </div>
    </section>
  );
};

export default HubungiSection;
