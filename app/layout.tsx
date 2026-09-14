import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Koushik Kotte — AI Engineer & Full-Stack Developer";
const description = "Portfolio of Koushik Kotte, building agentic AI, scalable systems, and full-stack products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://koushik-kotte-portfolio.arcane-hinny-4191.chatgpt.site"),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, type: "website", url: "https://koushik-kotte-portfolio.arcane-hinny-4191.chatgpt.site", images: [{ url: "/og.png", width: 1672, height: 941, alt: "Koushik Kotte portfolio" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
