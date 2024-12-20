import localFont from "next/font/local";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./globals.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

// Font files can be colocated inside of `app`
const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-[#D4E4BC]">
        <Header />
        <main>
          {children}
          <ViewCanvas />
          <Footer />
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
