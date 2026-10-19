import { ArrowUpRight, Circle, FileText, Users } from "lucide-react";
import type { ProjectMockup } from "../data/project";

export default function ProjectMockupCard({ mockup }: { mockup: ProjectMockup }) {
  const isDark = mockup.bodyTone === "dark";
  const accent = mockup.ctaTone === "crimson" ? "#9f4046" : "#6558a8";

  return (
    <div className={`relative min-h-[420px] overflow-hidden p-5 sm:min-h-[520px] sm:p-9 ${isDark ? "bg-[#E8D5C7]" : "bg-[#ddd9ed]"}`}>
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/45 blur-3xl" />
      <div className="relative mx-auto mt-6 max-w-[660px] overflow-hidden border border-[#0c2133]/12 bg-white shadow-[0_25px_80px_rgba(8,27,43,0.22)] transition-transform duration-500 group-hover:-translate-y-2">
        <div className={`flex items-center justify-between px-4 py-3 text-[9px] sm:px-6 ${mockup.navTone === "dark" ? "bg-[#101f2e] text-white" : "bg-white text-[#0c2133]"}`}>
          <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.14em]"><Circle className="h-2 w-2 fill-current" strokeWidth={0} />{mockup.brand}</div>
          <div className="hidden items-center gap-4 opacity-60 sm:flex">{mockup.navItems.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
        </div>

        <div className={`grid min-h-[330px] items-center gap-8 p-7 sm:grid-cols-[1.08fr_0.92fr] sm:p-10 ${isDark ? "bg-[#132a41] text-white" : "bg-[#f7f6fb] text-[#172033]"}`}>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] opacity-55">Modern legal work</p>
            <h3 className="mt-5 text-3xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-4xl">{mockup.headline}</h3>
            {mockup.tagline && <p className="mt-5 line-clamp-4 text-[11px] leading-5 opacity-60">{mockup.tagline}</p>}
            <span className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-semibold text-white" style={{ backgroundColor: accent }}>{mockup.cta}<ArrowUpRight className="h-3 w-3" /></span>
          </div>

          <div className={`space-y-3 border p-4 ${isDark ? "border-white/12 bg-white/[0.05]" : "border-[#6558a8]/15 bg-white"}`}>
            <div className="flex items-center justify-between border-b border-current/10 pb-3"><span className="text-[9px] font-semibold uppercase tracking-[0.14em] opacity-55">Workspace</span><span className="h-2 w-2 rounded-full bg-emerald-400" /></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-current/10 p-3"><FileText className="h-4 w-4 opacity-55" /><p className="mt-5 text-xl font-semibold">12</p><p className="mt-1 text-[8px] opacity-50">Active matters</p></div>
              <div className="border border-current/10 p-3"><Users className="h-4 w-4 opacity-55" /><p className="mt-5 text-xl font-semibold">08</p><p className="mt-1 text-[8px] opacity-50">Team members</p></div>
            </div>
            {["Documents reviewed", "Next hearing", "Client updates"].map((item, index) => <div key={item} className="flex items-center justify-between py-1 text-[8px] opacity-55"><span>{item}</span><span>{index === 0 ? "24" : index === 1 ? "Today" : "06"}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
