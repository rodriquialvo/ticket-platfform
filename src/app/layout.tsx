import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Box } from "@chakra-ui/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ticket Platform - Encuentra los mejores eventos",
  description: "Descubre y compra entradas para los mejores eventos en tu ciudad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
          <Providers>
              {children}
          </Providers>
      </body>
    </html>
  );
}
