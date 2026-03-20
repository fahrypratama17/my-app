import { Eye, ShoppingCart } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/component/ui/table";
import { Verif } from "@/feature/cms/verifikasi/types/type";
import Link from "next/link";
import { Button } from "@/shared/component/ui/button";

type Props = {
  data: Verif[];
};

const VerificationTable = ({ data }: Props) => {
  return (
    <div>
      <Table className="w-full table-fixed">
        <TableHeader className="border">
          <TableRow className="w-full">
            <TableHead className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
              ID Mitra
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
              Nama Usaha
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
              Pemilik
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
              Tanggal Daftar
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
              Status
            </TableHead>
            <TableHead className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
              Aksi
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
                {item.usaha}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.pemilik}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 wrap-break-word whitespace-normal">
                {item.tanggal}
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
                <span className="rounded-[20px] bg-[#A7A7A7] px-2 py-1 text-white">
                  {item.status}
                </span>
              </TableCell>
              <TableCell className="w-28.5 border border-green-900 bg-green-50 text-center wrap-break-word whitespace-normal">
                <Link
                  className="relative rounded-[20px] bg-green-300 py-1 pr-8"
                  href=""
                >
                  <Button className="cursor-pointer bg-transparent text-start">
                    Detail
                  </Button>
                  <Eye
                    className="absolute top-1.5 right-1.5 text-white"
                    size={15}
                  />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VerificationTable;
