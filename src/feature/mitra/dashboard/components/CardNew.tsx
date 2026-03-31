import { Card, CardContent } from "@/shared/component/ui/card";

type Props = {
  value: number;
};

const CardNew = ({ value }: Props) => {
  return (
    <Card className="rounded-[24px] border border-orange-900 bg-orange-100 py-4">
      <CardContent className="flex gap-3 text-orange-900 md:gap-12">
        <div>
          <p className="fomt-bold rounded-[12px] border border-orange-900 bg-orange-500 px-1 py-1 text-[8px] md:rounded-[20px] md:px-4 md:py-2 md:text-lg">
            Pesanan baru
          </p>
        </div>

        <p className="text-4xl font-bold md:text-8xl">{value}</p>
      </CardContent>
    </Card>
  );
};

export default CardNew;
