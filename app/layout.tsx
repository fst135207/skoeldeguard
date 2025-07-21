import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/app/components/layout/footer'
import { Header } from '@/app/components/layout/header'
import PageLoaderComponent from "@/components/PageLoaderComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SköldGuard",
  description: "SköldGuard - Ihr IT-Partner für lokale Unternehmen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <PageLoaderComponent>
        {children}
        </PageLoaderComponent>
        <Footer />
      </body>
    </html>
  );
}
