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
    <footer className="bg-orange-50 py-20">
      <div className="mx-auto grid h-50 w-[80%] grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex items-center">
            <Image src={"/logo/logo.svg"} alt={"logo"} width={40} height={40} />
            <p className="text-2xl-bold text-green-400">
              PANGAN<span className="text-orange-600">TARA</span>
            </p>
          </div>
          <p className="w-[60%] text-[18px] font-medium">
            Solusi pengadaan bahan pangan terintegrasi untuk SPPG di seluruh
            Indonesia
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-green-700">Layanan</p>

          {LayananLink.map((item, index) => (
            <div
              className="flex flex-col items-start gap-4 text-lg font-medium text-green-900"
              key={index}
            >
              <Link href={item.href} className="group relative inline-block">
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-green-900 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-green-700">Informasi</p>

          {InformasiLink.map((item, index) => (
            <div
              className="flex flex-col items-start gap-4 text-lg font-medium text-green-900"
              key={index}
            >
              <a href={item.href} className="group relative inline-block">
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-green-900 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-green-700">Hubungi Kami</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <MapPin className="shrink-0 text-orange-500" size={20} />
              <p className="flex flex-col gap-4 text-lg font-medium text-green-900">
                Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur,
                Indonesia - 65145
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Mail className="shrink-0 text-orange-500" size={20} />
              <p className="flex flex-col gap-4 text-lg font-medium text-green-900">
                pangantara@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Phone className="shrink-0 text-orange-500" size={20} />
              <p className="flex flex-col gap-4 text-lg font-medium text-green-900">
                +62 81111111111
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-25 w-[80%]">
        <p className="text-[18px] font-medium text-[#6D6D6D]">
          &copy; {new Date().getFullYear()} Pangantara. Seluruh hak cipta
          dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
