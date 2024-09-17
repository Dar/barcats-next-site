import { poppins } from "./utils/fonts";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "./components/Google/Analytics";
import { Suspense } from "react";
import { GtmTracking } from "./components/Google/Tagmanager";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            ></script>
          </>
        )}
      </head>
      <body className={poppins.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        <Suspense fallback={<div>Loading Analytics...</div>}>
          <GtmTracking />
          <Analytics />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
