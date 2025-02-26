import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

const layoutStyles: string = `w-screen h-screen ${GeistSans.className}`;

export const metadata: Metadata = {
  title: "Speak Easy",
  description: "The best translator I think",
  creator: "Speak Easy",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={layoutStyles}>{children}</body>
    </html>
  );
}
