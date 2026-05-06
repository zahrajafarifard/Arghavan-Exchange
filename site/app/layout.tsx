import type { Metadata } from "next";
// import localFont from "next/font/local";

import { ReduxProvider } from "../store/ReduxProvider";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Peyda } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "صرافی ارغوان - قیمت ارزو سکه",
  description: "صرافی ارغوان ارائه دهنده به روز ترین قیمت ارز و سکه",
  keywords:
    "صرافی ارغوان ،ارغوان، قیمت ارز ، قیمت سکه ، قیمت ارز و سکه ، تلمیس ، شرکت داده پردازان تلمیس ، داد پردازان تلمیس، شرکت تلمیس",
  icons: {
    icon: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "صرافی ارغوان - قیمت ارزو سکه",
    description: "صرافی ارغوان ارائه دهنده به روز ترین قیمت ارز و سکه",
    url: "https://arghavanex.ir",
    images: "/images/logo.png",
    siteName: "صرافی ارغوان",
    locale: "fa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Peyda.className}>
        <ReduxProvider>
          <header className="sticky top-0 z-50">
            <Header />
          </header>
          {children}
          <div id="modal" />
          <footer>
            <Footer />
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
