import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSMT — Cybersecurity and Media Tec",
  description:
    "Cybersecurity and Media Technology group. Ethical hacking, cybersecurity training, media tech solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
