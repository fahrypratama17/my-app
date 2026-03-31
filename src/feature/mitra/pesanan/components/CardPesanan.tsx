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
        "rounded-[8px] px-3 py-4 md:rounded-[24px] md:px-8 md:py-10",
        className,
      )}
    >
      <CardContent className="flex flex-col items-center gap-2 md:gap-3">
        <p className="fomt-bold text-[12px] md:text-4xl">{value}</p>
        <p className="text-center text-[8px] font-bold md:text-[16px]">
          {status}
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
