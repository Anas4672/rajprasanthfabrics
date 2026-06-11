import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raj Prasanth Handmade Fabric Products",
  description: "Premium handmade pouches, wallets, handbags and eco-friendly fabric products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
