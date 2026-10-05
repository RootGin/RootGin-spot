import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Statusbar } from "@/components/statusbar";
import { Footer } from "@/components/footer";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rootgin.vercel.app"),
  title: {
    default: "Gin | rootgin",
    template: "%s | Gin",
  },
  description:
    "just someone who likes building things for the web. terminal enthusiast, tea addict, occasional rabbit-hole explorer.",
  openGraph: {
    title: "Gin | rootgin",
    description: "terminal enthusiast, tea addict, occasional rabbit-hole explorer.",
    url: "/",
    siteName: "Gin | rootgin",
    locale: "en_US",
    type: "profile",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        <Statusbar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}