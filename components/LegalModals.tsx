"use client";

import { useEffect } from "react";
import { X, Shield, FileText } from "lucide-react";

export type LegalModalType = "privacy" | "terms" | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (activeModal) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const isPrivacy = activeModal === "privacy";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center">
              {isPrivacy ? (
                <Shield className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3
                id="legal-modal-title"
                className="text-lg font-bold text-slate-950"
              >
                {isPrivacy ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <p className="text-xs text-slate-500">
                CLEAN CONNECT (CAC Registration: BN 8897831) • Effective 2026
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  1. Data Controller Information
                </h4>
                <p>
                  This Privacy Policy governs the handling of information by{" "}
                  <strong>CLEAN CONNECT</strong> (Business Name Registration:{" "}
                  <strong>BN 8897831</strong>), registered with the Corporate
                  Affairs Commission (CAC) of the Federal Republic of Nigeria,
                  with head office at Suite 0.02, Mariam Babangida National
                  Women Development Centre, Central Business District (CBD),
                  Abuja, FCT, Nigeria.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  2. Information We Collect
                </h4>
                <p>
                  CLEAN CONNECT operates a static corporate informational portal
                  at <strong>cleanconnectproducts.online</strong>. We do not
                  deploy invasive tracking cookies or sell user data. When you
                  contact us via email (
                  <strong>admin@cleanconnectproducts.online</strong>),
                  telephone (<strong>+234 816 371 0850</strong>), or our
                  inquiry form, we process the contact details and
                  correspondence you voluntarily provide solely to respond to
                  your business, technical, or institutional verification
                  requests.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  3. Purpose & Legal Basis of Processing
                </h4>
                <p>
                  All corporate communications and client records are processed
                  in accordance with the Nigeria Data Protection Act (NDPA) and
                  applicable international privacy standards for legitimate
                  business operations, contractual fulfillment, and statutory
                  compliance.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  4. Data Security & Retention
                </h4>
                <p>
                  We implement appropriate administrative, technical, and
                  organizational safeguards to protect business correspondence
                  against unauthorized access, alteration, or disclosure.
                  Records are retained only for as long as necessary to fulfill
                  operational or regulatory obligations.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  5. Privacy Inquiries
                </h4>
                <p>
                  To exercise your rights regarding data access, correction, or
                  deletion, please contact our administrative office at{" "}
                  <a
                    href="mailto:admin@cleanconnectproducts.online"
                    className="text-emerald-700 font-semibold underline"
                  >
                    admin@cleanconnectproducts.online
                  </a>
                  .
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  1. Acceptance of Terms
                </h4>
                <p>
                  By accessing <strong>cleanconnectproducts.online</strong>, you
                  agree to be bound by these Terms of Service and all applicable
                  laws of the Federal Republic of Nigeria. This portal is
                  operated by <strong>CLEAN CONNECT</strong> (CAC Registration
                  Number: <strong>BN 8897831</strong>).
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  2. Scope of Services
                </h4>
                <p>
                  CLEAN CONNECT provides web and mobile application
                  development, digital product operations, and structured
                  administrative and business support services. Specific
                  project deliverables, timelines, and service-level agreements
                  are governed by formal written contracts executed between
                  CLEAN CONNECT and respective enterprise or institutional
                  clients.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  3. Intellectual Property
                </h4>
                <p>
                  All corporate trademarks, wordmarks, software architectures,
                  documentation, and content published on this website remain
                  the exclusive intellectual property of CLEAN CONNECT unless
                  otherwise stated in writing.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  4. Institutional Verification Accuracy
                </h4>
                <p>
                  The Corporate Profile details published on this site reflect
                  accurate, current registration records filed with the
                  Corporate Affairs Commission (CAC) of Nigeria for purposes of
                  commercial due diligence, Dun & Bradstreet (D&B) listing, and
                  Apple Developer Program verification.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  5. Governing Law & Contact
                </h4>
                <p>
                  These Terms are governed by the laws of the Federal Republic
                  of Nigeria. Official notices may be directed to Suite 0.02,
                  Mariam Babangida National Women Development Centre, CBD,
                  Abuja, FCT, Nigeria, or via{" "}
                  <a
                    href="mailto:admin@cleanconnectproducts.online"
                    className="text-emerald-700 font-semibold underline"
                  >
                    admin@cleanconnectproducts.online
                  </a>
                  .
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
