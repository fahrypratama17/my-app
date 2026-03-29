import { Card, CardContent } from "@/shared/component/ui/card";

const SuccessProgress = () => {
  return (
    <Card className="w-full border border-green-900 bg-orange-50">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <p className="rounded-full bg-orange-600 p-2 px-3.5 text-[12px] font-bold text-orange-50">
            1
          </p>
          <p className="text-sm font-bold text-green-900">Pengajuan Berhasil</p>
        </div>
        <div className="ml-4 h-4 w-0.5 bg-green-900" />
        <div className="flex items-center gap-4">
          <p className="rounded-full bg-orange-200 p-2 px-3.5 text-[12px] font-bold text-orange-50">
            2
          </p>
          <p className="text-sm font-bold text-green-900">
            Proses Peninjauan Internal
          </p>
        </div>
        <div className="ml-4 h-4 w-0.5 bg-green-900" />
        <div className="flex items-center gap-4">
          <p className="rounded-full bg-orange-200 p-2 px-3.5 text-[12px] font-bold text-orange-50">
            3
          </p>
          <p className="text-sm font-bold text-green-900">
            Aktivasi Akun Kemitraan
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessProgress;
