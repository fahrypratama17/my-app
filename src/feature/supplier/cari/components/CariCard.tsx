import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  address: string;
  category: string[];
};

const CariCard = ({ title, address, category }: Props) => {
  return (
    <Card className="border-2 border-green-900 pt-0 pb-3 shadow-[8px_8px_0px_0px_#0f301060] md:pb-6">
      <div className="object-cover">
        <Image
          className="object-cover"
          src={"/images/supplier-1.jpg"}
          alt={"gambar"}
          width={400}
          height={200}
        />
      </div>
      <CardContent className="flex flex-col justify-between px-2 md:px-4">
        <div className="flex h-20 flex-col gap-1 md:h-35 md:gap-3">
          <h3 className="text-[10px] font-bold md:text-2xl"> {title}</h3>
          <div className="flex items-center gap-1 text-[#7E7E7E] md:gap-3">
            <MapPin className="h-3 w-3 md:h-6 md:w-6" />
            <p className="text-[8px] font-medium md:text-[16px]">{address}</p>
          </div>
          <div className="flex items-center gap-1 md:gap-4">
            {category.map((cat, index) => (
              <div
                className={`rounded-[40px] px-2 text-[8px] md:px-4 md:text-[14px] ${index % 2 === 0 ? "bg-green-100" : "bg-orange-100"}`}
                key={index}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        <Link href="/supplier/detail-supplier">
          <Button className="h-6 w-full cursor-pointer border-2 border-green-900 bg-orange-400 text-[8px] font-bold text-green-900 hover:scale-105 md:py-5 md:text-xl">
            Detail Supplier
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CariCard;
