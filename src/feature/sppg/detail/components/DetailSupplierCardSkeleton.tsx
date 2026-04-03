import { Card, CardAction, CardContent } from "@/shared/component/ui/card";
import { Skeleton } from "@/shared/component/ui/skeleton";

const DetailSupplierCardSkeleton = () => {
  return (
    <Card className="flex flex-col justify-between">
      <CardContent className="grid grid-cols-[0.7fr_1fr] gap-1 px-2 md:gap-5 md:px-4">
        <Skeleton className="h-24 w-full md:h-40" />
        <div className="space-y-2 pt-1">
          <Skeleton className="h-3 w-4/5 md:h-8" />
          <Skeleton className="h-2.5 w-1/3 md:h-6" />
          <Skeleton className="h-2.5 w-1/2 md:h-6" />
        </div>
      </CardContent>
      <CardAction className="flex w-full items-center justify-between px-2 md:px-4 md:py-4">
        <Skeleton className="h-4 w-16 rounded-full md:h-8 md:w-24" />
        <div className="flex items-center gap-1 md:gap-4">
          <Skeleton className="h-4 w-4 rounded-[12px] md:h-8 md:w-8" />
          <Skeleton className="h-3 w-4 md:h-6 md:w-8" />
          <Skeleton className="h-4 w-4 rounded-[12px] md:h-8 md:w-8" />
        </div>
      </CardAction>
    </Card>
  );
};

export default DetailSupplierCardSkeleton;
