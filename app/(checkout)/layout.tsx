import type { Metadata } from "next";
import "@/app/globals.css";
import "@/app/(checkout)/checkoutGlobal.css";
import Head from 'next/head';

import CheckoutNav from "@/app/components/checkout/CheckoutNav";
import Footer from "@/app/components/footer/Footer";
import ScrollRestorationClient from "@/app/ui/ScrollRestorationClient";

export const metadata: Metadata = {
  title: {
    template: "%s | Ichikara",
    default: 'Ichikara',
  },
  description: "This is e-commerce site for company Ichikara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <CheckoutNav />
        <ScrollRestorationClient />
        {children}
        <Footer />
      </body>
    </html>
  );
}
