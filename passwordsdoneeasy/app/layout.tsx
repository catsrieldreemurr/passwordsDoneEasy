import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat ({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Passwords Done Easy",
  description: "A Simple, Open Source Password Generator written in NextJS + TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
