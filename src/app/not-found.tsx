import Link from "next/link";
import { notFound } from "./shared/Images";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <main className="mt-20 lg:mt-24">
      <section
        className="flex items-center min-h-36 lg:h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${notFound.src})` }}
      >
     
      </section>
      <div className="py-10 text-center">
      <h1 className="text-black text-center w-full text-[1.75rem] lg:text-[3.25rem] mt-3 font-bold drop-shadow-lg">
          404 - Page Not Found
        </h1>
        <p className="text-[1.25rem] lg:text-[1.25rem]">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <div className="pb-10">
          <Link href="/" passHref title="Bar Cats Cleaning Services Home">
            <button className="bg-siteColor text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-5">
              Go Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
