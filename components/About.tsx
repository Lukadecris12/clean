import {
  ShieldCheck,
  Award,
  CheckCircle,
  FileCheck,
  Scale,
  Building,
  Target,
  Sparkles,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Regulatory Compliance & Rigor",
      description:
        "Fully registered under Nigerian business law (CAC BN 8897831) and adhering strictly to national and international compliance benchmarks.",
      icon: Scale,
    },
    {
      title: "Engineering Resilience",
      description:
        "Building digital applications on proven, enterprise-grade cloud architectures with fault tolerance, data security, and verifiable performance.",
      icon: ShieldCheck,
    },
    {
      title: "Structured Administration",
      description:
        "Providing institutional-grade documentation, operational oversight, and governance continuity across all client engagements.",
      icon: FileCheck,
    },
    {
      title: "Transparent Accountability",
      description:
        "Clear service-level agreements, transparent corporate records, and dependable support channels for global partners and regulatory auditors.",
      icon: Building,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Operational Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-100/70 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              About The Enterprise
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Corporate Governance, Reliability, and Digital Excellence
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong>CLEAN CONNECT</strong> is a duly incorporated Nigerian enterprise
              committed to bridging modern digital software engineering with
              rigorous corporate administrative management.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating from the Federal Capital Territory, Abuja, our organization
              designs, develops, and manages high-performance digital platforms
              while providing institutional clients with structured operational
              support. We prioritize statutory compliance, operational transparency,
              and verifiable business integrity at every tier of our operations.
            </p>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-slate-950">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  CAC Compliance Verified
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-emerald-700">Abuja, FCT</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  National Administrative Hub
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Governance Pillars Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
