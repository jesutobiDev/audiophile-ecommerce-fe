import type { Metadata } from "next";
import "../styles/globals.css"
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Ecommerce Store for Audio Equipments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <main className="2xl:container 2xl:mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
