import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingButton, NavBar } from "@/components";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escritório - Wanessa Lopes",
  description: "Serviços de advocacia voltados para consumidores",
  icons: {
    icon: "/favico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="WhatsApp"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WFR5WVMM')`,
        }}
      />

      <body className={`${inter.className} `}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WFR5WVMM"
          height="0"
          width="0"
        />

        <NavBar />

        <main className="">{children}</main>

        <FloatingButton />
      </body>
    </html>
  );
}
