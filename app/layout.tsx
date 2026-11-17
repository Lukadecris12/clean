import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanconnectproducts.online"),
  title: "CLEAN CONNECT | Digital Products & Administrative Solutions",
  description:
    "Official corporate portal of CLEAN CONNECT (BN 8897831). Delivering high-reliability digital product engineering, enterprise software operations, and structured administrative management.",
  keywords: [
    "CLEAN CONNECT",
    "Digital Products",
    "Administrative Solutions",
    "Software Development Nigeria",
    "Abuja IT Services",
    "Corporate Affairs Commission Registered",
    "BN 8897831",
    "Web Application Development",
    "Enterprise Cloud Operations",
  ],
  authors: [{ name: "CLEAN CONNECT" }],
  creator: "CLEAN CONNECT",
  publisher: "CLEAN CONNECT",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CLEAN CONNECT | Digital Products & Administrative Solutions",
    description:
      "Official corporate portal of CLEAN CONNECT (BN 8897831). Enterprise digital product engineering, cloud software operations, and corporate administrative services.",
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
