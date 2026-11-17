import {
  Code2,
  Cpu,
  ClipboardCheck,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Smartphone,
  CloudCog,
  FileCheck2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "app-development",
      title: "Web & Mobile Application Development",
      description:
        "End-to-end architecture, development, and deployment of scalable digital platforms.",
      icon: Smartphone,
      accentBg: "bg-blue-50 text-blue-600 border-blue-200",
      pillBg: "bg-blue-100/60 text-blue-800",
      capabilities: [
        "Native & Cross-Platform Mobile Applications (iOS & Android)",
        "Enterprise Next.js & React Web Platforms",
        "Microservices Architecture & RESTful/GraphQL APIs",
        "Strict Security Standards & Performance Optimization",
      ],
      tag: "Engineering & Architecture",
    },
    {
      id: "product-operations",
      title: "Digital Product Operations",
      description:
        "Cloud infrastructure management, verification workflows, and ongoing software maintenance.",
      icon: CloudCog,
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      pillBg: "bg-emerald-100/60 text-emerald-800",
      capabilities: [
        "High-Availability Cloud Infrastructure & CI/CD Pipelines",
        "Apple Developer & Institutional Verification Workflows",
        "24/7 Monitoring, Patch Management & Security Audits",
        "Data Integrity, Database Backups & Disaster Recovery",
      ],
      tag: "Infrastructure & Verification",
    },
    {
      id: "admin-support",
      title: "Administrative & Business Support",
      description:
        "Structured operational support, documentation management, and enterprise coordination.",
      icon: FileCheck2,
      accentBg: "bg-slate-100 text-slate-800 border-slate-300",
      pillBg: "bg-slate-200/70 text-slate-800",
      capabilities: [
        "Corporate Registry Compliance & Statutory Documentation",
        "Institutional Vendor & Partner Relationship Coordination",
        "Standard Operating Procedures (SOP) & Policy Design",
        "Enterprise Records, Document Archival & SLA Monitoring",
      ],
      tag: "Enterprise Governance",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Specialized Digital & Operational Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering robust technological execution and disciplined corporate
            operations designed to meet rigorous institutional standards.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-50/70 border border-slate-200/80 p-8 hover:bg-white hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl border flex items-center justify-center ${service.accentBg} shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.pillBg}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-700 transition-colors tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="space-y-3 pt-6 border-t border-slate-200/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Scope of Delivery
                    </span>
                    {service.capabilities.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-700 font-medium leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-8 mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
                  >
                    <span>Request operational brief</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
