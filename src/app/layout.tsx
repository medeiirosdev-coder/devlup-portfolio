import type { Metadata } from "next";
import { clashDisplay } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEVLUP | Agência de Webdesign & Desenvolvimento",
  description: "Agência de Webdesign & Desenvolvimento - DEVLUP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
