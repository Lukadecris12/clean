import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanconnectproducts.online"),
  title: "CLEAN CONNECT | Administrative & Business Support Services",
  description:
    "Official corporate portal of CLEAN CONNECT (CAC BN 8897831). Providing structured office administration, compliance liaison, documentation management, and digital business support services in Abuja, Nigeria.",
  keywords: [
    "CLEAN CONNECT",
    "Administrative Services Nigeria",
    "Business Support Services Abuja",
    "Office Administration",
    "Corporate Liaison Services",
    "Corporate Affairs Commission Registered",
    "BN 8897831",
    "Documentation Management",
    "Digital Operations Support",
  ],
  authors: [{ name: "CLEAN CONNECT" }],
  creator: "CLEAN CONNECT",
  publisher: "CLEAN CONNECT",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CLEAN CONNECT | Administrative & Business Support Services",
    description:
      "Official corporate portal of CLEAN CONNECT (CAC BN 8897831). Dependable office administration, operational coordination, documentation management, and digital business support in Abuja, Nigeria.",
    url: "https://cleanconnectproducts.online",
    siteName: "CLEAN CONNECT",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://cleanconnectproducts.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
