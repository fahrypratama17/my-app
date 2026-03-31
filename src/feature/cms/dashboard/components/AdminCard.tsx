import { Card, CardContent } from "@/shared/component/ui/card";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: number;
};

const AdminCard = ({ icon, title, value }: Props) => {
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
