import { Card, CardContent } from "@/shared/component/ui/card";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: number;
};

const AdminCard = ({ icon, title, value }: Props) => {
  return (
    <Card className="rounded-[24px] px-8 py-10">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center text-orange-700">
          <div className="rounded-[11px] bg-orange-100 p-2">{icon}</div>
        </div>
        <p className="text-lg-semibold text-green-900">{title}</p>
        <p className="text-8xl-bold text-green-900">{value}</p>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
