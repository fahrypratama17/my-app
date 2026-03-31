import { Card, CardContent } from "@/shared/component/ui/card";
import { cn } from "@/shared/lib/utils";

type Props = {
  value: number;
  status: string;
  className?: string;
};

const DashboardCard = ({ value, status, className }: Props) => {
  return (
    <Card
      className={cn(
        "rounded-[8px] md:rounded-[24px] md:px-8 md:py-10",
        className,
      )}
    >
      <CardContent className="flex flex-col items-center gap-1 md:gap-3">
        <p className="text-[12px] font-bold md:text-4xl">{value}</p>
        <p className="text-[8px] font-bold md:text-[16px]">{status}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
