"use client";
import { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    }
  };

  const updateIsDesktop = () => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 1024); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      window.addEventListener('resize', updateIsDesktop);
      updateIsDesktop(); 
      return () => {
        window.removeEventListener('scroll', controlHeader);
        window.removeEventListener('resize', updateIsDesktop);
      };
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`z-10 fixed px-2 lg:px-0 top-0 left-0 w-full bg-white text-white transition-transform duration-300 drop-shadow ${
        isDesktop && (showHeader ? 'translate-y-0' : '-translate-y-full')
      }`} 
    >
      <Navigation />
    </header>
  );
};

export default Header;
