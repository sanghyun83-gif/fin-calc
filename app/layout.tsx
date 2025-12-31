import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-CLQYC4HRE3";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinCalc | Free 1099 Self-Employment Tax Calculator 2025",
  description: "Calculate your 2025 self-employment taxes instantly. Free 1099 tax calculator for US freelancers with accurate IRS rates. SE tax, federal tax, and quarterly payments.",
  keywords: ["1099 tax calculator", "self employment tax calculator", "freelance tax calculator", "quarterly tax estimator", "SE tax 2025"],
  verification: {
    google: "qlPMVO_Hb-be3_hFHNT9SBbsHO-b_wCOfWfLmTb4EQc",
  },
  openGraph: {
    title: "Free 1099 Tax Calculator 2025 | FinCalc",
    description: "Calculate SE tax, federal tax, and quarterly payments for freelancers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
