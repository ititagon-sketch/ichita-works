import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一太製作所",
  description: "一太製作所の仕事と、そのつくり方。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
