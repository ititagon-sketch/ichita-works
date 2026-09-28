import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一太製作所｜静岡県磐田市の木型製作・試作",
  description: "静岡県磐田市の一太製作所。手加工による木型製作、試作、一品もの・小ロットの製作に対応しています。製作例やお問い合わせはこちら。",
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
