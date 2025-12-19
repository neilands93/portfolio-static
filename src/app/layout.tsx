import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  variable: "--font-courier",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cane | AI & Creativity",
  description: "Portfolio of Cane: AI Facilitation & Creative Experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${courier.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
