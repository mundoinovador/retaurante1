import React from "react";

interface Props {
  title?: string;
  colorBg?: string;
  pathClick?: string;
}

export function ButtonDefault({
  title,
  colorBg,
  pathClick = "#",
}: Props): React.ReactNode {
  return (
    <a
      href={pathClick}
      className={`flex items-center justify-center h-[2.4rem] bg-[${
        colorBg || "var(--bg-color-green)"
      }] text-[#f5f1e3] text-xs text-center px-4 sm:px-8 py-2 rounded-sm font-semibold`}
    >
      {title}
    </a>
  );
}
