import React from "react";
import { Metadata } from "next";
import Form from "../components/Form";
import { Facebook, Instagram } from "../shared/Icons/Icons";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us | Bar Cats Commercial Cleaning",
    description:
      "Get in touch with us to learn more about our services, pricing, and schedules. We're here to assist you with any questions.",
    keywords:
      "contact, customer service, email, phone, social media, get in touch",
    openGraph: {
      title: "Contact Us | Bar Cats Commercial Cleaning",
      description:
        "Reach out to us with any inquiries about our services, pricing, and more. We're available via phone, email, and social media.",
      url: "https://barcats.ca/contact",
      images: [
        {
          url: "https://barcats.ca/assets/barcats-commercial-cleaning-contact.webp",
          width: 1792,
          height: 1024,
          alt: "Contact Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Your Company Name",
      description:
        "Need help? Contact us for more information about our services, pricing, and availability.",
      images: [
        {
          url: "https://barcats.ca/assets/barcats-commercial-cleaning-contact.webp",
          width: 1792,
          height: 1024,
          alt: "Contact Us",
        },
      ],
    },
  };
}

export const viewport = "width=device-width,initial-scale=1";


function Contact() {
  return (
    <>
      <div className="text-textColor flex flex-col md:flex-row max-w-6xl mx-auto mt-8 p-4">
        <div className="md:w-1/2 p-4">
          <h2 className="text-black text-3xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p>
            We are available to assist you with any questions you have regarding
            our prices, schedules, or services.
          </p>
          <ul className="list-none mt-10">
            <li className="items-center mb-4 space-y-2">
              <p className="flex font-bold text-black text-[18px]">Call Us</p>
              <p>
                <a
                  className="flex items-center gap-4 hover:text-hoverText"
                  href="tel:416-617-1979"
                >
                  <span className="text-lg">(416) 617-1979</span>
                </a>
              </p>
            </li>
            <li className="items-center mb-4 space-y-2">
              <p className="flex text-black font-bold text-[18px]">
                Send Email
              </p>
              <p>
                <a
                  title="Email Bar Cats Commercial Cleaning Services"
                  href="mailto:barcatsclean@gmail.com"
                  className="items-center gap-4 hover:text-hoverText"
                >
                  <span className="text-lg">barcatsclean@gmail.com</span>
                </a>
              </p>
            </li>
          </ul>
          <div className="w-full">
            <p className="mb-4 text-siteColor font-bold text-[18px]">
              Follow Us
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <a
                  href="https://www.facebook.com"
                  className="flex items-center"
                  title="Bar Cats Commercial Cleaning Services | Follow us on Facebook"
                >
                  <Facebook
                    desc="Bar Cats Commercial Cleaning Services | Follow us on Facebook"
                    color={"1877F2"}
                    size={24}
                  />
                  <span className="ml-2 text-lg hover:text-[#1877F2]">
                    Facebook
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com"
                  className="flex items-center"
                  title="Bar Cats Commercial Cleaning Services | Follow us on Instagram"
                >
                  <Instagram
                    desc="Bar Cats Commercial Cleaning Services | Follow us on Instagram"
                    color={"f77737"}
                    size={24}
                  />
                  <span className="ml-2 text-lg hover:text-[#f77737]">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
