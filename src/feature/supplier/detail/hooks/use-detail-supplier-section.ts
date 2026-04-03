"use client";

import { useMemo, useState } from "react";
import { cardDetailData } from "@/feature/supplier/detail/data/data";
import type { cardType } from "@/feature/supplier/detail/types/type";

export type DetailOrderItem = {
  id: number;
  title: string;
  unit: string;
  quantity: number;
  unitPrice: number;
};

function parseCostToNumber(cost: string) {
  const normalized = cost.replace(/[^\d,]/g, "");
  const [integerPart] = normalized.split(",");
  return Number(integerPart.replace(/\./g, "")) || 0;
}

function formatToIdr(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function useDetailSupplierSection() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [cartOpened, setCartOpened] = useState(false);
  const [openScan, setOpenScan] = useState(false);
  const [showAllOrderItems, setShowAllOrderItems] = useState(false);

  const filteredProducts = useMemo(() => {
    const keyword = searchQuery.trim().toLowerCase();
    if (!keyword) return cardDetailData;

    return cardDetailData.filter((item) =>
      item.title.toLowerCase().includes(keyword),
    );
  }, [searchQuery]);

  const displayedProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, 9);

  const updateQuantity = (id: number, direction: "inc" | "dec") => {
    setQuantities((prev) => {
      const current = prev[id] ?? 0;
      const next = direction === "inc" ? current + 1 : Math.max(current - 1, 0);

      if (next === 0) {
        const nextState = { ...prev };
        delete nextState[id];
        return nextState;
      }

      return { ...prev, [id]: next };
    });
  };

  const selectedItems = useMemo(() => {
    const byId = new Map<number, cardType>(
      cardDetailData.map((item) => [item.id, item]),
    );

    return Object.entries(quantities)
      .map(([id, quantity]) => {
        const item = byId.get(Number(id));
        if (!item || quantity <= 0) return null;

        return {
          id: item.id,
          title: item.title,
          unit: item.unit,
          quantity,
          unitPrice: parseCostToNumber(item.cost),
        } satisfies DetailOrderItem;
      })
      .filter((item): item is DetailOrderItem => item !== null);
  }, [quantities]);

  const subtotal = selectedItems.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0,
  );
  const shippingCost = subtotal > 0 ? 20000 : 0;
  const tax = Math.round(subtotal * 0.11);
  const total = subtotal + shippingCost + tax;

  return {
    searchQuery,
    setSearchQuery,
    showAllProducts,
    setShowAllProducts,
    quantities,
    updateQuantity,
    displayedProducts,
    cartOpened,
    setCartOpened,
    selectedItems,
    subtotal,
    shippingCost,
    tax,
    total,
    formatCurrency: formatToIdr,
    openScan,
    setOpenScan,
    canOpenCart: selectedItems.length > 0,
    showAllOrderItems,
    setShowAllOrderItems,
  };
}

