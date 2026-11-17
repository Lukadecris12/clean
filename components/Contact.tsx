"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(
      formData.subject || "Corporate Inquiry - CLEAN CONNECT"
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nReply-To Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:admin@cleanconnectproducts.online?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-100/70 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4">
            Direct Communication Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Contact CLEAN CONNECT
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach our corporate office for enterprise digital engineering,
            administrative partnerships, or institutional verification inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card */}
            <a
              href="mailto:admin@cleanconnectproducts.online"
              className="block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/60 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </span>
                    <h3 className="text-base font-bold text-slate-950 mt-0.5 break-all">
                      admin@cleanconnectproducts.online
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      For project briefs, compliance, and verification requests.
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors flex-shrink-0" />
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+2348163710850"
              className="block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/60 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Telephone
                    </span>
                    <h3 className="text-base font-bold text-slate-950 mt-0.5">
                      +234 816 371 0850
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Monday – Friday, 8:30 AM – 5:00 PM (WAT)
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
              </div>
            </a>

            {/* Office Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Registered Head Office
                  </span>
                  <h3 className="text-base font-bold text-slate-950 mt-0.5 leading-snug">
                    Suite 0.02, Mariam Babangida National Women Development Centre
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Central Business District (CBD), Abuja, FCT, Nigeria
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>CAC Registry Reference: BN 8897831</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Client-Side Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-slate-950">
                      Inquiry Draft Prepared
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your default email client has been prompted with a
                      pre-formatted message addressed to{" "}
                      <strong className="text-slate-900">
                        admin@cleanconnectproducts.online
                      </strong>
                      . If your email application did not open automatically,
                      you may email us directly using the address on the left.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href="mailto:admin@cleanconnectproducts.online"
                      className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Open Mail Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        Send a Corporate Inquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Generates a structured email draft directly to our
                        administrative desk.
                      </p>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Full Name / Organization
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Amina Bello, Meridian Systems"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Work Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Digital Product Development / Administrative Partnership"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Message Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your project scope, operational requirements, or verification inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Compose Official Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
