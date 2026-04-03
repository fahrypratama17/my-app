import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/component/ui/card";
import { FlowCardSPPGData } from "@/feature/sppg/penggunaan/data/data";

const FlowCardSPPG = () => {
  return (
    <section className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6">
      {FlowCardSPPGData.map((item) => {
        const isEven = item.id % 2 === 0;

        return (
          <Card
            className={`gap-2 border-2 border-green-900 p-4 md:gap-4 md:p-8 ${isEven ? "bg-green-500" : "bg-green-900"} ${item.id === 5 ? "col-span-2 mx-auto flex w-[50%] md:col-span-1 md:mx-0 md:w-full" : ""}`}
            key={item.id}
          >
            <CardHeader
              className={`w-fit justify-center rounded-[8px] px-4 py-2 text-center text-[12px] font-bold md:mb-4 md:rounded-[16px] md:px-8 md:py-4 md:text-2xl ${isEven ? "bg-[#FFFFFF29] text-white" : "bg-orange-500 text-green-900"}`}
            >
              0{item.id}
            </CardHeader>
            <CardTitle className="text-[10px] font-bold text-white md:text-xl">
              {item.title}
            </CardTitle>
            <CardDescription className="w-full text-[8px] font-medium text-white md:w-[80%] md:text-sm">
              {item.desc}
            </CardDescription>
          </Card>
        );
      })}
    </section>
  );
};

export default FlowCardSPPG;
