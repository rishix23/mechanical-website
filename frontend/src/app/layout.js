import { Inter } from "next/font/google";
import Banner from "../components/banner/banner";
import Navbar from "../components/navbar/navbar";

import Footer from "@/components/footer/footer";
import "../styles/modern-normalize.css";
import "../styles/globals.css";
import "../styles/utils.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "D.R. Mechanical",
  description: "HVAC Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Banner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
