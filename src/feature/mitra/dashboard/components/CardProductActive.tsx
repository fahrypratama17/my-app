import { Card, CardContent } from "@/shared/component/ui/card";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: number;
};

const CardProductActive = ({ icon, title, value }: Props) => {
  return (
    <Card className="rounded-[24px] border border-green-900 bg-green-600 py-4 md:px-8 md:py-10">
      <CardContent className="flex flex-col gap-1 md:gap-3">
        <div className="flex items-center text-green-50">
          <div className="rounded-[11px] bg-orange-600 p-2">{icon}</div>
        </div>
        <p className="text-[12px] font-semibold text-green-50 md:text-lg">
          {title}
        </p>
        <p className="text-4xl font-bold text-green-50 md:text-8xl">{value}</p>
      </CardContent>
    </Card>
  );
};

export default CardProductActive;
