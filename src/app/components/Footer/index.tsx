"use client";
import { useEffect, useState } from "react";
import { imagePathFooter } from "@/app/shared/Images";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import {
  EmailIcon,
  Facebook,
  Instagram,
  PhoneIcon,
} from "@/app/shared/Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Snackbar, Tooltip } from "@mui/material";

const Footer: React.FC = () => {
  const EMAIL = "barcatsclean@gmail.com";
  const [open, setOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleCopyClick = () => {
    navigator.clipboard.writeText(EMAIL);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-siteColor">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex justify-center mb-6 lg-4 md:mb-0  ">
            <Link href="/" className="flex items-center">
              <Image
                src={imagePathFooter.src}
                priority={true}
                alt="Bar Cats Commercial Cleaning"
                width={250}
                height={144}
              />
            </Link>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8 sm:gap-6 sm:grid-cols-2">
            <div className="md:mb-6">
              <h3 className="mb-3 text-md font-semibold uppercase text-white">
                Site Links
              </h3>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="text-[#fff] hover:text-hoverText">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/#about"
                    className="text-[#fff] hover:text-hoverText"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/#services"
                    className="text-[#fff] hover:text-hoverText"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/contact"
                    className="text-[#fff] hover:text-hoverText"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="mb-3 text-md font-semibold uppercase text-white">
                  Contact Us
                </h3>
                <ul className="list-none">
                  <li className="flex items-center mb-2">
                    <a
                      className="flex items-center text-white hover:text-hoverText lg:gap-4"
                      href="tel:416-617-1979"
                    >
                      <PhoneIcon
                        desc="Bar Cats Commercial Cleaning Services | Phone Number"
                        color={"ffc70b"}
                        size={16}
                      />
                      <span className="xs:hidden ml-2 text-lg">
                        (416) 617-1979
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <span
                      onClick={handleCopyClick}
                      className="flex items-center lg:gap-4 text-white hover:cursor-pointer"
                    >
                      <EmailIcon
                        desc="Bar Cats Commercial Cleaning Services | Email Address"
                        color={"ffc70b"}
                        size={16}
                      />
                      <span className=" hover:text-hoverText ml-2 text-lg">
                        {EMAIL}
                      </span>
                      <Tooltip title="Copy to clipboard">
                        <IconButton
                          color="inherit"
                          size="small"
                          sx={{ ml: 1 }}
                        >
                          <ContentCopyIcon />
                        </IconButton>
                      </Tooltip>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-md font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="list-none">
                  <li className="flex items-center mb-2">
                    <a
                      href="https://www.facebook.com/barcats.ca"
                      title="Bar Cats Commercial Cleaning Services | Follow us on Facebook"
                      className="flex items-center text-white"
                    >
                      <Facebook
                        desc="Bar Cats Commercial Cleaning Services | Follow us on Facebook"
                        color={"1877F2"}
                        size={24}
                      />
                      <span className="ml-2 text-lg  hover:text-[#1877F2]">
                        Facebook
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <a
                      href="https://www.instagram.com/barcatscleaning/"
                      title="Bar Cats Commercial Cleaning Services | Follow us on Instagram"
                      className="flex items-center text-white"
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Email address copied!"
          />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 text-white" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            &copy; {currentYear} -{" "}
            <Link href="/" className="hover:text-hoverText">
              Bar Cats Commercial Cleaning
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
