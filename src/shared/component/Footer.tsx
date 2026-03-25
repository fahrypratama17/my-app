import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const LayananLink = [
  { name: "Cari Suplier", href: "/cari-supplier" },
  { name: "FAQ", href: "/FAQ" },
  { name: "Hubungi", href: "/hubungi" },
];

const InformasiLink = [
  { name: "Tentang Kami", href: "/#tentang" },
  { name: "Alur Penggunaan", href: "/#alur" },
];

const Footer = () => {
  return (
    <footer className="bg-orange-50 py-8 md:py-20">
      <div className="mx-auto grid h-43.75 w-[90%] grid-cols-[1.3fr_1fr_1fr_1fr] gap-2 md:h-50 md:w-[80%] md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] md:gap-0">
        <div className="flex flex-col justify-center gap-4 md:gap-8">
          <div className="flex items-center">
            <Image
              src={"/logo/logo.svg"}
              alt={"logo"}
              width={40}
              height={40}
              className="h-3 w-3 md:h-10 md:w-10"
            />
            <p className="text-[8px] font-bold text-green-400 md:text-2xl">
              PANGAN<span className="text-orange-600">TARA</span>
            </p>
          </div>
          <p className="w-full text-[8px] font-medium md:w-[60%] md:text-[18px]">
            Solusi pengadaan bahan pangan terintegrasi untuk SPPG di seluruh
            Indonesia
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          <p className="text-[8px] font-bold text-green-700 md:text-2xl">
            Layanan
          </p>

          {LayananLink.map((item, index) => (
            <div
              className="flex flex-col items-start text-[8px] font-medium text-green-900 md:gap-4 md:text-lg"
              key={index}
            >
              <Link href={item.href} className="group relative inline-block">
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-green-900 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          <p className="text-[8px] font-bold text-green-700 md:text-2xl">
            Informasi
          </p>

          {InformasiLink.map((item, index) => (
            <div
              className="flex flex-col items-start gap-4 text-[8px] font-medium text-green-900 md:text-lg"
              key={index}
            >
              <a href={item.href} className="group relative inline-block">
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-green-900 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          <p className="text-[8px] font-bold text-green-700 md:text-2xl">
            Hubungi Kami
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 md:gap-6">
              <MapPin
                className="h-3 w-3 shrink-0 text-orange-500 md:h-5 md:w-5"
                size={20}
              />
              <p className="flex flex-col gap-4 text-[8px] font-medium text-green-900 md:text-lg">
                Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur,
                Indonesia - 65145
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <Mail
                className="h-3 w-3 shrink-0 text-orange-500 md:h-5 md:w-5"
                size={20}
              />
              <p className="flex flex-col gap-4 text-[8px] font-medium text-green-900 md:text-lg">
                pangantara@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <Phone
                className="h-3 w-3 shrink-0 text-orange-500 md:h-5 md:w-5"
                size={20}
              />
              <p className="flex flex-col gap-4 text-[8px] font-medium text-green-900 md:text-lg">
                +62 81111111111
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80%] md:mt-25">
        <p className="text-[8px] font-medium text-[#6D6D6D] md:text-[18px]">
          &copy; {new Date().getFullYear()} Pangantara. Seluruh hak cipta
          dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
