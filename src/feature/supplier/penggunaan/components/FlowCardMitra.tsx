import { FlowCardMitraData } from "@/feature/supplier/penggunaan/data/data";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/component/ui/card";

const FlowCardMitra = () => {
  return (
    <section className="grid grid-cols-3 gap-6">
      {FlowCardMitraData.map((item) => {
        const isEven = item.id % 2 === 0;

        return (
          <Card
            className={`border-2 border-green-900 p-8 ${isEven ? "bg-green-500" : "bg-green-900"}`}
            key={item.id}
          >
            <CardHeader
              className={`mb-4 w-[20%] rounded-[16px] py-4 text-center text-2xl font-bold ${isEven ? "bg-[#FFFFFF29] text-white" : "bg-orange-500 text-green-900"}`}
            >
              0{item.id}
            </CardHeader>
            <CardTitle className="text-xl font-bold text-white">
              {item.title}
            </CardTitle>
            <CardDescription className="w-[80%] text-sm font-medium text-white">
              {item.desc}
            </CardDescription>
          </Card>
        );
      })}
    </section>
  );
};

export default FlowCardMitra;
