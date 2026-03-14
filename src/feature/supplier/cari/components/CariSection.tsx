import { SupplierData } from "@/feature/supplier/cari/data/data";
import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Kategori from "@/feature/supplier/cari/components/Kategori";
import { MapPin } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import Image from "next/image";

const CariSection = () => {
  return (
    <div className="mt-40">
      <Kategori />

      <div className="mt-30 w-full rounded-t-[100px] border-t-4 border-green-900 py-20">
        <div className="mx-auto mb-20 w-[85%]">
          <div className="max-w-[35%] rounded-[40px] border-2 border-green-900 bg-green-50 p-3 px-6">
            <h1 className="text-4xl-bold text-center text-green-900">
              Supplier Terpopuler
            </h1>
          </div>
        </div>
        <div className="mx-auto grid w-[85%] grid-cols-3 gap-12">
          {SupplierData.map((item) => (
            <Card
              className="border-2 border-green-900 pt-0 pb-6 shadow-[8px_8px_0px_0px_#0f301060]"
              key={item.id}
            >
              <div className="object-cover">
                <Image
                  className="object-cover"
                  src={"/images/supplier-1.jpg"}
                  alt={"gambar"}
                  width={400}
                  height={200}
                />
              </div>
              <CardHeader className="text-2xl-bold">{item.title}</CardHeader>
              <CardContent className="flex h-35 flex-col justify-between">
                <div className="flex items-center gap-3 text-[#7E7E7E]">
                  <MapPin />
                  <p className="text-md-medium">{item.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  {item.category.map((cat, index) => (
                    <div
                      className={`rounded-[40px] px-4 ${index % 2 === 0 ? "bg-green-100" : "bg-orange-100"}`}
                      key={index}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
                <Button className="w-full border-2 border-green-900 bg-orange-400 py-5 text-xl font-bold text-green-900">
                  Detail Supplier
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CariSection;
