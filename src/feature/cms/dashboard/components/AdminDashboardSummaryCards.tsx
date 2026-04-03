"use client";

import { Store, ClipboardList, Coffee } from "lucide-react";
import Card from "@/feature/cms/dashboard/components/AdminCard";
import { useDashboardSummaryQuery } from "@/shared/repository/dashboard-summary/query";
import { useDashboardSummaryErrorToast } from "@/hooks/use-dashboard-summary-error-toast";

const AdminDashboardSummaryCards = () => {
  const { data, isLoading, isError, error } = useDashboardSummaryQuery();

  useDashboardSummaryErrorToast(
    isError,
    error instanceof Error ? error : null,
  );

  const cardData = [
    {
      title: "Total Mitra",
      value: data?.total_supplier ?? "-",
      icon: <Store className="h-3 w-3 md:h-7.5 md:w-7.5" />,
    },
    {
      title: "Menunggu Verifikasi",
      value: data?.supplier_pending ?? "-",
      icon: <ClipboardList className="h-3 w-3 md:h-7.5 md:w-7.5" />,
    },
    {
      title: "Total SPPG",
      value: data?.total_sppg ?? "-",
      icon: <Coffee className="h-3 w-3 md:h-7.5 md:w-7.5" />,
    },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-6">
      {cardData.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default AdminDashboardSummaryCards;

