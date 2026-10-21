import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A durability counter',
  description: 'Wear and repair events clamped to a max. Not an oracle and not mutable NFT data.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
