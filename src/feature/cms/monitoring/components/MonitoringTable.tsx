import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/component/ui/table";
import { ShoppingCart } from "lucide-react";
import { Order } from "@/feature/cms/dashboard/types/type";

type Props = {
  data: Order[];
};

const MonitoringTable = ({ data }: Props) => {
  return (
    <div className="hidden md:block">
      <div className="flex w-full items-center justify-between rounded-t-[12px] border border-b-0 border-green-900 bg-green-50 p-7">
        <div className="flex items-center gap-5">
          <div className="rounded-full bg-orange-50 p-4 text-orange-600">
            <ShoppingCart size={30} />
          </div>
          <div>
            <h2 className="text-xl-bold text-green-900">Pesanan Terbaru</h2>
            <p className="text-sm-semibold text-green-400">30 pesanan</p>
          </div>
        </div>
      </div>
      <Table className="w-full table-fixed">
        <TableHeader className="border">
          <TableRow className="w-full">
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              ID Pesanan
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Dapur SPPG
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Mitra
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Produk
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Jumlah
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Total
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Tanggal
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-100 text-center wrap-break-word whitespace-normal">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.id}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.dapur}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.mitra}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.produk}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.jumlah}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.total}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.tanggal}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MonitoringTable;
