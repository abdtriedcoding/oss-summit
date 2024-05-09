import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "OSS Summit",
  description:
    "A crowdsourced list of the best open-source projects on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
