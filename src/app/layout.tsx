import type { Metadata } from "next";
import "../styles/globals.css"
import Footer from "@/sections/Footer";
import { Providers } from "./Provider";

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
        className="antialiased overflow-x-hidden"
      >
        <main className="2xl:container 2xl:mx-auto overflow-x-hidden">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
