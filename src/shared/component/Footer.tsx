import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-orange-50 py-20">
      <div className="mx-auto grid h-[200px] w-[80%] grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex items-center">
            <Image
              src={"/logo/logo-noir.svg"}
              alt={"logo"}
              width={40}
              height={40}
            />
            <p className="text-2xl font-bold text-[#474747]">
              PANGAN<span className="text-[#8C8C8C]">TARA</span>
            </p>
          </div>
          <p className="w-[60%] text-[18px] font-medium">
            Solusi pengadaan bahan pangan terintegrasi untuk SPPG di seluruh
            Indonesia
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-green-700">Layanan</p>

          <div className="flex flex-col gap-4">
            <p>Cari Suplier</p>
            <p>FAQ</p>
            <p>Hubungi</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-green-700">Informasi</p>

          <div className="flex flex-col gap-4 text-lg font-medium text-green-900">
            <p>Tentang Kami</p>
            <p>Alur Penggunaan</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold text-green-700">Hubungi Kami</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <MapPin className="text-orange-500" width={60} height={25} />
              <p className="flex flex-col gap-4 text-lg font-medium text-green-900">
                Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur,
                Indonesia - 65145
              </p>
            </div>
            <div className="flex gap-6">
              <Mail className="text-orange-500" width={20} height={20} />
              <p className="flex flex-col gap-4 text-lg font-medium text-green-900">
                pangantara@gmail.com
              </p>
            </div>
            <div className="flex gap-6">
              <Phone className="text-orange-500" width={20} height={20} />
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
