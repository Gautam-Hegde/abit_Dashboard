import type { Metadata } from "next";
import {inter} from './styles/fonts'
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";




export const metadata: Metadata = {
  title: "abit | Creator Dashboard",
  description: "Creator dashboard for managing your media account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={cn('min-h-screen font-sans antialiased ',inter.className)}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
