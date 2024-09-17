import HomeTemplate from "./components/Homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bar Cats Commercial Cleaning Services",
  description:
    "Bar Cats is a commercial cleaning company specializing in bars and restaurants in the core of downtown Toronto. Great reputation, reliable, fair rates.",
  keywords:
    "Commercial cleaning services, Commercial cleaners Toronto, Restaurant cleaning, Bar cleaning, Restaurant cleaning services near me",
  robots: "index, follow",
  metadataBase: new URL(`https://barcats.ca`),
  alternates: {
    canonical: "./",
  },
  referrer: 'origin-when-cross-origin',
  creator: 'Melissa Armstrong',
  publisher: 'Melissa Armstrong',
  verification: { google: "JGg0wJoaggExOWWzDt_DzuJ79VrVAbkS9HK0G5YJpow" },
  openGraph: {
    title: "Bar Cats Commercial Cleaning Services",
    description:
      "Bar Cats is a Commercial Cleaning Company specializing in bars and restaurants in the core of downtown Toronto. Great reputation, reliable, fair rates.",
    url: "https://barcats.ca",
    siteName: "barcats.ca",
    images: [
      {
        url: "https://barcats.ca/assets/images/barcats-cleaning-service.webp",
        width: 1200,
        height: 630,
        alt: "Bar Cats Commercial Cleaning Services",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bar Cats Commercial Cleaning Services",
    description:
      "Commercial Cleaning Company Specializing in bars and restaurants in downtown Toronto. Great reputation, reliable, fair rates.",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export const viewport = "width=device-width,initial-scale=1";

export default async function Home() {
  return (
    <main>
      <HomeTemplate />
    </main>
  );
}
