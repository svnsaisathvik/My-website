import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono"
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata = {
  title: "SVN Sai Sathvik — CS Engineer & ML Researcher",
  description:
    "Portfolio of SVN Sai Sathvik — Integrated M.Tech CS student at IIIT Bangalore. ML research, systems programming, and full-stack development.",
  openGraph: {
    title: "SVN Sai Sathvik",
    description: "ML research, systems programming, full-stack dev.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
