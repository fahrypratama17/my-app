import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import { MapPin } from "lucide-react";

type Props = {
  title: string;
  address: string;
  category: string[];
};

const CariCard = ({ title, address, category }: Props) => {
  return (
    <Card className="border-2 border-green-900 pt-0 pb-6 shadow-[8px_8px_0px_0px_#0f301060]">
      <div className="object-cover">
        <Image
          className="object-cover"
          src={"/images/supplier-1.jpg"}
          alt={"gambar"}
          width={400}
          height={200}
        />
      </div>
      <CardHeader className="text-2xl-bold">{title}</CardHeader>
      <CardContent className="flex h-35 flex-col justify-between">
        <div className="flex items-center gap-3 text-[#7E7E7E]">
          <MapPin />
          <p className="text-md-medium">{address}</p>
        </div>
        <div className="flex items-center gap-4">
          {category.map((cat, index) => (
            <div
              className={`rounded-[40px] px-4 ${index % 2 === 0 ? "bg-green-100" : "bg-orange-100"}`}
              key={index}
            >
              {cat}
            </div>
          ))}
        </div>
        <Button className="w-full cursor-pointer border-2 border-green-900 bg-orange-400 py-5 text-xl font-bold text-green-900 hover:scale-105">
          Detail Supplier
        </Button>
      </CardContent>
    </Card>
  );
};

export default CariCard;
