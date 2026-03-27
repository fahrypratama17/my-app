import { Card, CardContent } from "@/shared/component/ui/card";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const CardProduct = ({ icon, title, value }: Props) => {
  return (
    <Card className="rounded-[24px] border border-green-900 bg-green-600 px-8 py-10">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center text-green-50">
          <div className="rounded-[11px] bg-orange-600 p-2">{icon}</div>
        </div>
        <p className="text-lg-semibold text-green-50">{title}</p>
        <p className="text-5xl-bold text-green-50">{value}</p>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
