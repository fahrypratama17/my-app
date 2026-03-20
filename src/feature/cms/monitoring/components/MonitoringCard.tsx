import { Card, CardContent } from "@/shared/component/ui/card";
import { cn } from "@/shared/lib/utils";

type Props = {
  value: number;
  status: string;
  className?: string;
};

const DashboardCard = ({ value, status, className }: Props) => {
  return (
    <Card className={cn("rounded-[24px] px-8 py-10", className)}>
      <CardContent className="flex flex-col items-center gap-3">
        <p className="text-4xl-bold">{value}</p>
        <p className="text-md-bold">{status}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
