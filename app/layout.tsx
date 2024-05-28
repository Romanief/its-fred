import BackgroundSide from "@/components/BackgroundSide";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "It's Fred (again)",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/f. ico" />
      </head>
      <body>
        {children}
        <BackgroundSide/>
      </body>
    </html>
  );
}
