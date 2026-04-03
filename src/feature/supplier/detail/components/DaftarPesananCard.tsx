import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { ChevronDown, Rows4 } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import type { DetailOrderItem } from "@/feature/supplier/detail/hooks/use-detail-supplier-section";

type Props = {
  items: DetailOrderItem[];
  formatCurrency: (value: number) => string;
  showAllItems: boolean;
  onToggleShowAll: () => void;
};

const DaftarPesananCard = ({
  items,
  formatCurrency,
  showAllItems,
  onToggleShowAll,
}: Props) => {
  const displayedItems = showAllItems ? items : items.slice(0, 3);

  return (
    <Card className="w-full rounded-[16px] border-2 border-green-900 py-0 md:rounded-[40px] md:pb-4">
      <CardHeader className="flex items-center gap-2 rounded-none bg-green-600 px-4 py-4 text-orange-50 md:gap-4 md:px-8">
        <Rows4 className="p-1 md:p-0" />
        <p className="text-[12px] font-bold md:text-3xl">Daftar Pesanan</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 px-4 pb-8 md:gap-12 md:px-8 md:py-4">
        {displayedItems.map((item) => {
          const total = item.quantity * item.unitPrice;

          return (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium md:text-xl">{item.title}</p>
                <p className="text-[8px] font-medium text-[#A7A7A7] md:text-lg">
                  {item.quantity} {item.unit} x {formatCurrency(item.unitPrice)}
                </p>
              </div>
              <p className="text-[10px] font-bold text-green-900 md:text-xl">
                {formatCurrency(total)}
              </p>
            </div>
          );
        })}

        {items.length > 3 && (
          <Button
            onClick={onToggleShowAll}
            className="h-6 w-[40%] cursor-pointer border-2 border-green-900 bg-green-50 text-green-900 hover:scale-105 md:w-[35%] md:py-4"
          >
            <p className="text-[8px] font-semibold md:text-[18px]">
              {showAllItems ? "Tampilkan sedikit" : "Lihat lebih banyak"}
            </p>
            <ChevronDown className="p-1 md:p-0" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DaftarPesananCard;
