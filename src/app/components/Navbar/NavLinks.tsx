"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { links, LinkType, SubLink } from "./MenuLinks";

const NavLinks = ({updateParentState}:{updateParentState:any}) => {
  const [heading, setHeading] = useState<string>("");
  const [subHeading, setSubHeading] = useState<string>("");
  const router = useRouter();

  const toggleMenu = () => {
    updateParentState();
  };
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (link: string) => {
    if (link.startsWith("/#")) {
      const sectionId = link.split("#")[1];

      if (typeof window !== "undefined" && window.location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        router.push(`/#${sectionId}`);
      }
    } else {
      router.push(link);
    }
    toggleMenu();
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const sectionIdFromHash = window.location.hash.replace("#", "");
      scrollToSection(sectionIdFromHash);
    }
   
  }, [router]); 

  return (
    <>
      {links.map((link: LinkType, i: number) => (
        <li key={i}>
          <div className="px-2 text-left md:cursor-pointer group">
            <a
              onClick={() => handleNavigation(link.link)}
              className="text-linkColor hover:text-hoverText sm:text-xs md:text-[16px] lg:text-lg py-7 flex justify-between items-center md:pr-0 pr-5 group font-poppins"
            >
              {link.name}
            </a>
            {link.submenu && (
              <div className="absolute top-15 hidden group-hover:md:block hover:md:block">
                <div className="p-1 grid grid-cols-2">
                  <ul className="bg-white rounded-lg">
                    {link.sublinks && link.sublinks.map((mysublinks, i: number) => (
                      <li className="p-4" key={i}>
                        <a
                          href={mysublinks.link}
                          className="text-linkColor hover:text-hoverText text-[16px] font-poppins"
                        >
                          {mysublinks.Head}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks &&
              link.sublinks.map((slinks: SubLink, i: number) => (
                <div key={i}>
                  <div>
                    <p
                      onClick={() => {
                        subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                      }
                       
                      }
                      className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                    >
                      {slinks.Head}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
