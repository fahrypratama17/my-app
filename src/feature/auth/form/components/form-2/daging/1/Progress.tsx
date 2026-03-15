import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";

const Progress = () => {
  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader>
        <p className="text-xl-bold text-orange-900">Langkah 1 dari 3</p>
      </CardHeader>
      <CardContent className="flex flex-col">
        <h1 className="text-3xl-bold text-green-900">
          Menjadi Mitra Profesional
        </h1>
        <div className="mt-15 flex w-full flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center px-4">
            <div className="mr-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600">
              <p className="text-3xl-bold text-orange-50">1</p>
            </div>

            <div className="h-1 w-80 bg-green-600"></div>

            <div className="mx-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600">
              <p className="text-3xl-bold text-orange-50">2</p>
            </div>

            <div className="h-1 w-80 bg-green-600"></div>

            <div className="ml-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600">
              <p className="text-3xl-bold text-orange-50">3</p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-48">
            <div className="rounded-2xl p-4">
              <p className="text-lg-bold text-green-800">
                Informasi Umum Supplier
              </p>
            </div>

            <div className="rounded-2xl p-4">
              <p className="text-lg-bold text-green-800">
                Kategori Bahan Pangan
              </p>
            </div>

            <div className="rounded-2xl p-4">
              <p className="text-lg-bold text-green-800">
                Verifikasi Produk Kategori
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Progress;
