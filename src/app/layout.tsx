import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/components/CartContext";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FESTIVE FAVORS",
  description: "Celebrate in style with birthday decorations, theme party kits, and elegant wedding accessories to make every occasion unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CartProvider>
        {children}
        </CartProvider>
        <Footer/>
        </body>
    </html>
  );
}
