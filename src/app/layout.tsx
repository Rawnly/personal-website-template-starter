import "./globals.css";
import { PT_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import config from "@/config";

const pt = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: config.name,
  description: config.jobTitle,
  keywords: [],
  icons:
    "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📀</text></svg>",
  authors: {
    name: "Federico Vitale",
    url: "https://fedevitale.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden bg-background text-foreground">
      <body className={pt.className}>{children}</body>
      <Analytics />
    </html>
  );
}
