import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/component/ui/table";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import Link from "next/link";
import { Mitra } from "@/feature/mitra/dashboard/types/type";

type Props = {
  data: Mitra[];
};

const PesananTable = ({ data }: Props) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between rounded-t-[12px] border border-b-0 border-green-900 bg-green-600 p-7">
        <div className="flex items-center gap-5">
          <div className="rounded-full border-2 border-orange-900 bg-orange-600 p-4 text-orange-50">
            <ShoppingCart size={30} />
          </div>
          <div>
            <h2 className="text-xl-bold text-green-50">Pesanan Terbaru</h2>
            <p className="text-sm-semibold text-green-100">
              5 pesanan terakhir di platform
            </p>
          </div>
        </div>
      </div>
      <Table className="w-full table-fixed">
        <TableHeader className="border">
          <TableRow className="w-full">
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              ID Pesanan
            </TableHead>
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              Pembeli
            </TableHead>
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              Produk
            </TableHead>
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              Jumlah
            </TableHead>
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              Total
            </TableHead>
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              Status
            </TableHead>
            <TableHead className="text-lg-bold w-28.5 border border-green-900 bg-orange-100 text-center wrap-break-word whitespace-normal">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.id}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.pembeli}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.produk}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.jumlah}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.total}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 text-center font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.status}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 text-center font-semibold wrap-break-word whitespace-normal text-green-900">
                {item.aksi}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PesananTable;
