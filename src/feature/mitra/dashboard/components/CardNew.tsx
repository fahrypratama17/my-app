import { Card, CardContent } from "@/shared/component/ui/card";

type Props = {
  value: number;
};

const CardNew = ({ value }: Props) => {
  return (
    <Card className="rounded-[24px] border border-orange-900 bg-orange-100 py-4">
      <CardContent className="flex gap-12 text-orange-900">
        <div>
          <p className="text-lg-bold rounded-[20px] border border-orange-900 bg-orange-500 px-4 py-2">
            Pesanan baru
          </p>
        </div>

        <p className="text-8xl-bold">{value}</p>
      </CardContent>
    </Card>
  );
};

export default CardNew;
