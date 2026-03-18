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
      <CardContent className="flex w-[90%] flex-col gap-12">
        <div className="flex items-center justify-between">
          <Tabs
            defaultValue="mitra"
            className="flex flex-col gap-12 rounded-[16px]"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-4xl-bold text-green-900">Alur Penggunaan</h1>
              <TabsList className="cursor-pointer rounded-[16px] bg-green-50 py-6">
                <TabsTrigger
                  className="text-sm-semibold cursor-pointer rounded-[12px] px-4 py-5 text-green-400 data-active:bg-green-500 data-active:text-white data-[state=active]:bg-green-500"
                  value="mitra"
                >
                  Mitra
                </TabsTrigger>
                <TabsTrigger
                  className="text-sm-semibold cursor-pointer rounded-[12px] px-4 py-5 text-green-400 data-active:bg-green-500 data-active:text-white"
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
