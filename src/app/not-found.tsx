import Link from "next/link";
import { notFound,socialNotFound } from "./shared/Images";
import { NextPage } from "next";

export const metadata = {
  title: '404 - Page Not Found | Bar Cats Commercial Cleaning Services',
  description: "The page you're looking for could have been removed, renamed, or is temporarily unavailable.",
  keywords: '404, Page Not Found, Bar Cats Commercial Cleaning, commercial Cleaning, commercial cleaners, cleaning near me.,deep cleaning',
  robots:'noindex, nofollow',
  openGraph: {
    title: '404 - Page Not Found | Bar Cats Commercial Cleaning Services',
    description: "The page you're looking for could have been removed, renamed, or is temporarily unavailable.",
    url: 'https://barcats.ca/404',
    images: [
      {
        url: socialNotFound.src,
        width: 640,
        height: 400,
        alt: '404 - Page Not Found',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '404 - Page Not Found | Bar Cats Commercial Cleaning Services',
    description: "The page you're looking for could have been removed, renamed, or is temporarily unavailable.",
    images: [
      {
        url: socialNotFound.src,
        width: 640,
        height: 400,
        alt: '404 - Page Not Found',
      },
    ],
  },
  
};


const NotFound: NextPage = () => {
  return (
    <>
      <main className="mt-20 lg:mt-24">
        <section
          className="flex items-center min-h-36 lg:h-96 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${notFound.src})` }}
        ></section>
        <div className="py-10 text-center">
          <h2 className="text-black text-center w-full text-[1.75rem] lg:text-[3.25rem] mt-3 font-bold drop-shadow-lg">
            404 - Page Not Found
          </h2>
          <p className="text-[1.25rem] lg:text-[1.25rem]">
            Sorry, the page you are looking for doesn&apos;t exist.
          </p>
          <div className="pb-10">
            <Link href="/" passHref title="Bar Cats Cleaning Services Home link">
              <button className="bg-siteColor text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-5">
                Go to Homepage
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
