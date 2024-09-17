"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../Button";
import NavLinks from "./NavLinks";
import HamburgerMenu from "@/app/shared/MenuButton";
import { anton } from "../../utils/fonts";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const onSetOpen = () => {
    setOpen(!open);
  };


  return (
    <nav className="bg-white container mx-auto max-w-7xl lg:px-7">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">
        <h1 className={`${anton.className} text-siteColor m-0 py-1.5 font-bold tracking-widest uppercase sm:text-md md:text-2xl lg:text-2xl`}>
            <Link href="/" title="Bar Cats Commercial Cleaning" className="hover:text-hoverText">
              BAR CATS
              <br />
              COMMERCIAL CLEANING
              <br />
              SERVICES
            </Link>
          </h1>
          <div className="text-3xl md:hidden" onClick={onSetOpen}>
            <HamburgerMenu updateParentState={onSetOpen} />
          </div>
        </div>
        <div className="flex items-center justify-around">
          <ul className="sm:mr-5 md:mr-5 md:flex hidden uppercase items-end gap-4 font-[Poppins]">
            <NavLinks updateParentState={onSetOpen}/>
          </ul>
          <div className="md:block hidden z-0 text-center">
            <p className="text-textColor hover:text-hoverText text-xl lg:text-2xl text-center py-2">
              <Link href="tel:416-617-1979">(416) 617-1979</Link>
            </p>
            <Button
              buttonAction={() => router.push("/#contactForm")}
              classNames="bg-siteColor text-white px-3 py-2 rounded-full"
            >
              Get a free quote!
            </Button>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white h-[100vh] fixed w-full top-0 bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <NavLinks  updateParentState={onSetOpen}/>
          <div className="py-5 z-0">
            <Button buttonAction={() => router.push("/contact")} classNames="bg-siteColor text-white px-3 py-2 rounded-full">
              Get a free quote!
            </Button>
          </div>
          <div className="py-5">
            <p className="text-textColor px-3 py-2">
              <Link href="tel:416-617-1979">(416) 617-1979</Link>
            </p>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
