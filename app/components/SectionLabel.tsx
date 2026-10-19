import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export default function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? "text-white/60" : "text-[#234e70]"} ${className}`}>
      <span
        className="h-px w-16 shrink-0"
        style={{
          background: "linear-gradient(90deg, #D3DCEA 0%, #798BA2 50%, #213C5C 100%)",
        }}
      />
      {children}
    </div>
  );
}
