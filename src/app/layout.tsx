import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/ui/globals.css";

import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ben Milner | Portfolio",
  description: "Personal professional portfolio for Ben Milner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-700 flex flex-col h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
