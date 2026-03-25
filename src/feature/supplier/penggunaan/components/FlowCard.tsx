import { Card, CardContent } from "@/shared/component/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/component/ui/tabs";
import FlowCardMitra from "@/feature/supplier/penggunaan/components/FlowCardMitra";
import FlowCardSPPG from "@/feature/supplier/penggunaan/components/FlowCardSPPG";

const FlowCard = () => {
  return (
    <Card className="flex items-center justify-center border-white ring-0">
      <CardContent className="flex w-full flex-col gap-12 md:w-[90%]">
        <div className="flex items-center justify-between">
          <Tabs
            defaultValue="mitra"
            className="flex flex-col gap-4 rounded-[16px] md:gap-12"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-[16px] font-bold text-green-900 md:text-4xl">
                Alur Penggunaan
              </h1>
              <TabsList className="cursor-pointer rounded-[8px] bg-green-50 py-2 md:rounded-[16px] md:py-6">
                <TabsTrigger
                  className="cursor-pointer rounded-[8px] py-3 text-[8px] font-semibold text-green-400 data-active:bg-green-500 data-active:text-white data-[state=active]:bg-green-500 md:rounded-[12px] md:px-4 md:py-5 md:text-sm"
                  value="mitra"
                >
                  Mitra
                </TabsTrigger>
                <TabsTrigger
                  className="cursor-pointer rounded-[8px] py-3 text-[8px] font-semibold text-green-400 data-active:bg-green-500 data-active:text-white md:rounded-[12px] md:px-4 md:py-5 md:text-sm"
                  value="tim sppg"
                >
                  Tim SPPG
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mitra">
              <FlowCardMitra />
            </TabsContent>
            <TabsContent value="tim sppg">
              <FlowCardSPPG />
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlowCard;
