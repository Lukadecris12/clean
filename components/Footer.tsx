"use client";

import { useState } from "react";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import LegalModals, { LegalModalType } from "./LegalModals";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            {/* Brand Summary */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 font-extrabold text-base">
                  CC
                </div>
                <div>
                  <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                    CLEAN CONNECT
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    CAC Registered Entity • BN 8897831
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                Providing dependable office administration, compliance liaison,
                documentation management, and digital business support services
                across Nigeria.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Legal Entity • Federal Republic of Nigeria</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Corporate Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About & Governance
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Core Services
                  </a>
                </li>
                <li>
                  <a
                    href="#corporate-profile"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Corporate Profile (BN 8897831)
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact & Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Contact */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Registered Office & Desk
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Suite 0.02, Mariam Babangida National Women Development
                    Centre, CBD, Abuja, FCT, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a
                    href="mailto:admin@cleanconnectproducts.online"
                    className="hover:text-white transition-colors break-all"
                  >
                    admin@cleanconnectproducts.online
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a
                    href="tel:+2348163710850"
                    className="hover:text-white transition-colors"
                  >
                    +234 816 371 0850
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 CLEAN CONNECT (BN 8897831). All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-emerald-400"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-emerald-400"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}
