import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Server,
  Layers,
  Sparkles,
  ExternalLink,
  Building2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-100">
      {/* Background Subtle Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Regulatory Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Corporate Affairs Commission Registered • BN 8897831
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            Building Reliable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-700">
              Digital Products
            </span>{" "}
            & Administrative Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            CLEAN CONNECT designs, develops, and operates consumer and
            enterprise web and mobile applications alongside structured
            administrative support services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Initiate Inquiries</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm hover:shadow"
            >
              <span>Explore Services</span>
            </a>
          </div>

          {/* Trust Matrix Chips */}
          <div className="pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified Entity</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">CAC Registry: BN 8897831</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Apple & D&B Ready</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Verified Corporate Identity</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Server className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Cloud Resilient</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Enterprise Architecture</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Building2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Abuja Head Office</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">CBD, Abuja, FCT, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
