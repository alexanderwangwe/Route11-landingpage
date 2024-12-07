import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Poppins, Inter} from 'next/font/google';

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400','600','700', '800'],
  // variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", '600',"700", '800'],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Route11",
  description: "Campus commuting made effortless.",
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
        {children}
      </body>
    </html>
  );
}
