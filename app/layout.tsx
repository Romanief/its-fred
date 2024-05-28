import BackgroundSide from "@/components/BackgroundSide";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "It's Fred (again)",
  description: `Hey, it's Fred! I am a self taught software developer coming from a background of Physiotherapy. 
  I have been practicing with full stack development and AI through different courses and independent practice.
  I am not good at explaining what I can do with words so check it out yourself with my projects below!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/f.ico" />
      </head>
      <body>
        {children}
        <BackgroundSide/>
      </body>
    </html>
  );
}
