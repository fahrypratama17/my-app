"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Kategori from "@/feature/sppg/cari/components/Kategori";

const QUERY_KEY = "kategori";
const SHOW_QUERY_KEY = "show";

const CariCategoryFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get(QUERY_KEY);

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(SHOW_QUERY_KEY);

    if (!category) {
      params.delete(QUERY_KEY);
    } else {
      params.set(QUERY_KEY, category);
    }

    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname);
  };

  return (
    <Kategori
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
    />
  );
};

export default CariCategoryFilter;
