"use client";

import { useIsMobile } from "@/hooks/use-mobile";

type ResponsiveStepTextProps = {
  mobileText: string;
  desktopText: string;
  className?: string;
};

const ResponsiveStepText = ({
  mobileText,
  desktopText,
  className = "text-[8px] font-medium text-green-900 md:text-[16px]",
}: ResponsiveStepTextProps) => {
  const isMobile = useIsMobile();

  return <p className={className}>{isMobile ? mobileText : desktopText}</p>;
};

export default ResponsiveStepText;

