import { CartProvider } from "./lib/context/CartContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product List with Cart",
  description: "Product list page with Cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
