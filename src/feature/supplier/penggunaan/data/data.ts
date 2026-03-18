import {
  FAQType,
  FlowCardType,
} from "@/feature/supplier/penggunaan/types/type";

export const FlowCardMitraData: FlowCardType[] = [
  {
    id: 1,
    title: "Isi Formulir",
    desc: "Mitra mendaftar dan mengisi formulir pendaftaran dengan data usaha yang diperlukan.",
  },
  {
    id: 2,
    title: "Verifikasi dan Meeting Online",
    desc: "Setelah mendaftar, mitra menunggu verifikasi email dari tim Pangantara untuk mengikuti sesi meeting online.",
  },
  {
    id: 3,
    title: "Mengunggah Produk",
    desc: "Setelah dinyatakan lolos verifikasi, mitra dapat mengunggah bahan pangan yang dijual",
  },
  {
    id: 4,
    title: "Menerima Pesanan",
    desc: "Mitra dapat menerima pesanan bahan pangan dari SPPG melalui platform Pangantara.",
  },
  {
    id: 5,
    title: "Mengelola Ketersediaan Bahan",
    desc: "Mitra dapat memperbarui atau mengubah status bahan pangan kapan saja, termasuk ketersediaan stok dan informasi lainnya.",
  },
];

export const FlowCardSPPGData: FlowCardType[] = [
  {
    id: 1,
    title: "Membuat Akun Dapur",
    desc: "Tim SPPG membuat akun di platform Pangantara.",
  },
  {
    id: 2,
    title: "Masuk ke Platform",
    desc: "Setelah akun aktif, tim SPPG dapat masuk ke platform untuk mulai mencari bahan pangan yang dibutuhkan.",
  },
  {
    id: 3,
    title: "Mencari Supplier",
    desc: "SPPG dapat mencari bahan pangan dan melihat berbagai supplier  lengkap dengan harga, spesifikasi, dan ketersediaan stok.",
  },
  {
    id: 4,
    title: "Melakukan Pemesanan",
    desc: "SPPG memilih supplier yang sesuai lalu mengirimkan pesanan bahan pangan melalui platform.",
  },
  {
    id: 5,
    title: "Menerima dan Mengecek Barang",
    desc: "Supplier mengirim bahan ke dapur SPPG, tim SPPG mengecek ulang kondisi bahan pangan.",
  },
];

export const FAQData: FAQType[] = [
  {
    id: 1,
    q: "Apa itu Pangantara?",
    a: "Pangantara adalah platform yang menghubungkan dapur SPPG dengan supplier dan pedagang pasar lokal untuk mempermudah pengadaan bahan pangan dalam program MBG.",
  },
  {
    id: 2,
    q: "Siapa saja yang dapat menggunakan Pangantara?",
    a: "Pangantara adalah platform yang menghubungkan dapur SPPG dengan supplier dan pedagang pasar lokal untuk mempermudah pengadaan bahan pangan dalam program MBG.",
  },
  {
    id: 3,
    q: "Bagaimana cara menjadi mitra Pangantara?",
    a: "Pangantara adalah platform yang menghubungkan dapur SPPG dengan supplier dan pedagang pasar lokal untuk mempermudah pengadaan bahan pangan dalam program MBG.",
  },
  {
    id: 4,
    q: "Apakah semua mitra langsung dapat menjual produknya?",
    a: "Pangantara adalah platform yang menghubungkan dapur SPPG dengan supplier dan pedagang pasar lokal untuk mempermudah pengadaan bahan pangan dalam program MBG.",
  },
  {
    id: 5,
    q: "Bagaimana cara SPPG memesan bahan pangan?",
    a: "Pangantara adalah platform yang menghubungkan dapur SPPG dengan supplier dan pedagang pasar lokal untuk mempermudah pengadaan bahan pangan dalam program MBG.",
  },
];
