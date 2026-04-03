import { Card, CardContent } from "@/shared/component/ui/card";
import { Skeleton } from "@/shared/component/ui/skeleton";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: number | string | React.ReactNode;
  isLoading?: boolean;
};

const AdminCard = ({ icon, title, value, isLoading = false }: Props) => {
  if (isLoading) {
    return (
      <Card className="rounded-[24px] px-2 py-4 md:px-8 md:py-10">
        <CardContent className="flex flex-col gap-1 md:gap-3">
          <Skeleton className="h-7 w-7 rounded-[11px] md:h-12 md:w-12" />
          <Skeleton className="h-3 w-20 md:h-6 md:w-36" />
          <Skeleton className="h-9 w-24 md:h-20 md:w-40" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-[24px] px-2 py-4 md:px-8 md:py-10">
      <CardContent className="flex flex-col gap-1 md:gap-3">
        <div className="flex items-center text-orange-700">
          <div className="rounded-[11px] bg-orange-100 p-2">{icon}</div>
        </div>
        <p className="text-[8px] font-semibold text-green-900 md:text-lg">
          {title}
        </p>
        <p className="text-[36px] font-bold text-green-900 md:text-8xl">
          {value}
        </p>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
