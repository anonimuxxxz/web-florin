import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import GoogleAnalytics from "./GoogleAnalytics";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Construcciones Florin | Construcción y viviendas", template: "%s | Construcciones Florin" },
  description: "Construcción de viviendas, casas prefabricadas y reformas. Cuéntanos tu proyecto a Construcciones Florin.",
  openGraph: { title: "Construcciones Florin", description: "Construcción, viviendas y reformas.", type: "website", locale: "es_ES" }
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><GoogleAnalytics/><Navbar/><div className="site-content">{children}</div><Footer/><WhatsAppFloat/></body></html>}
