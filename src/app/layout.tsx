import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfonso Malavolta & Figlio",
  description: "Malavolta motors",
  icons: {
    icon: "/images/logo.png", // favicon e icona standard
    shortcut: "/images/logo.png",
    apple: "/images/logo.png", // icona per iPhone/iPad
  },
  openGraph: {
    title: "Alfonso Malavolta & Figlio",
    description: "Malavolta motors",
    images: ["/images/logo.png"], // immagine preview social
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={poppins.className}>
      <head>
        <meta name="google-site-verification" content="hIeTtf4vSQ-nM7pORW0lH9Dm2p6tA_qEEP6gOshu6qw" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
