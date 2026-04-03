import { Card, CardContent } from "@/shared/component/ui/card";
import { Skeleton } from "@/shared/component/ui/skeleton";

const CariCardSkeleton = () => {
  return (
    <Card className="border-2 border-green-900 pt-0 pb-3 shadow-[8px_8px_0px_0px_#0f301060] md:pb-6">
      <Skeleton className="h-22 w-full rounded-b-none md:h-45" />
      <CardContent className="flex flex-col justify-between px-2 md:px-4">
        <div className="flex h-23 flex-col gap-2 md:h-40 md:gap-3">
          <Skeleton className="h-3 w-4/5 md:h-6" />
          <Skeleton className="h-3 w-2/3 md:h-5" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16 rounded-full md:h-6 md:w-20" />
            <Skeleton className="h-4 w-20 rounded-full md:h-6 md:w-28" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-14 rounded-full md:h-6 md:w-16" />
            <Skeleton className="h-4 w-14 rounded-full md:h-6 md:w-16" />
          </div>
        </div>
        <Skeleton className="h-6 w-full rounded-full md:h-11" />
      </CardContent>
    </Card>
  );
};

export default CariCardSkeleton;

