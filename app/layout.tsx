import type { Metadata } from "next";
import { Archivo, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Statusbar } from "@/components/statusbar";
import { Footer } from "@/components/footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  style: ["italic"],
  weight: "400",
  variable: "--font-instrument-serif",
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

const THEME_SCRIPT = `try{var t=localStorage.theme;if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable} ${serif.variable}`} data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <Nav />
        {children}
        <Statusbar />
        <Footer />
      </body>
    </html>
  );
}