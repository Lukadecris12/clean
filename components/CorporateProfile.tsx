"use client";

import { useState } from "react";
import {
  Building2,
  FileBadge2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ShieldCheck,
  ExternalLink,
  Briefcase,
  Lock,
} from "lucide-react";

export default function CorporateProfile() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const corporateDetails = [
    {
      label: "Registered Entity Name",
      value: "CLEAN CONNECT",
      copyable: true,
      key: "name",
      icon: Building2,
    },
    {
      label: "CAC Registration Number",
      value: "BN 8897831",
      badge: "Active Registry",
      copyable: true,
      key: "cac",
      icon: FileBadge2,
    },
    {
      label: "Regulatory Authority",
      value: "Corporate Affairs Commission (CAC), Federal Republic of Nigeria",
      copyable: false,
      key: "regulator",
      icon: ShieldCheck,
    },
    {
      label: "Registered Office Address",
      value:
        "Suite 0.02, Mariam Babangida National Women Development Centre, CBD, Abuja, FCT, Nigeria",
      copyable: true,
      key: "address",
      icon: MapPin,
    },
    {
      label: "Official Corporate Domain",
      value: "cleanconnectproducts.online",
      copyable: true,
      key: "domain",
      icon: Globe,
    },
    {
      label: "Official Inquiries Email",
      value: "admin@cleanconnectproducts.online",
      copyable: true,
      key: "email",
      icon: Mail,
    },
    {
      label: "Official Telephone",
      value: "+234 816 371 0850",
      copyable: true,
      key: "phone",
      icon: Phone,
    },
    {
      label: "Core Operations Scope",
      value:
        "Administrative and support service activities, office management, corporate documentation, and business operations support.",
      copyable: false,
      key: "operations",
      icon: Briefcase,
    },
  ];

  return (
    <section id="corporate-profile" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            Official Regulatory Verification Block
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Institutional Corporate Profile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Public registration details for institutional partners, clients, and
            statutory due diligence inquiries.
          </p>
        </div>

        {/* High-Contrast Corporate Information Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white shadow-2xl overflow-hidden border border-slate-800">
          {/* Card Top Banner */}
          <div className="bg-slate-950 px-6 sm:px-8 py-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
                  Official Entity Record
                  <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    Active & Good Standing
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Federal Republic of Nigeria • Corporate Affairs Commission
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified CAC Business Record</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-slate-900 to-slate-950">
            {corporateDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        <Icon className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-slate-100 break-words leading-snug">
                      {item.value}
                    </div>
                  </div>

                  {item.copyable && (
                    <div className="pt-3 mt-3 border-t border-slate-700/40 flex justify-end">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.value, item.key)}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700"
                        title="Copy to clipboard"
                      >
                        {copiedKey === item.key ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Verification Footnote */}
          <div className="bg-slate-950/80 px-6 sm:px-8 py-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                Registered with the Corporate Affairs Commission (CAC), Federal Republic of Nigeria. Status:{" "}
                <strong className="text-white">Active</strong>.
              </span>
            </div>
            <a
              href="mailto:admin@cleanconnectproducts.online?subject=Corporate%20Verification%20Inquiry"
              className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Request Formal Registry Transcript
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
