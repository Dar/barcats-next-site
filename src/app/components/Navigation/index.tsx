import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { anton } from "../../utils/fonts";
import Button from "../Button";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <h1
            className={`${anton.className} text-siteColor m-0 py-1.25 font-bold tracking-widest uppercase sm:text-md md:text-2xl lg:text-2xl`}
          >
            <Link
              href="/"
              title="Bar Cats Commercial Cleaning"
              className="hover:text-hoverText"
            >
              BAR CATS
              <br />
              COMMERCIAL CLEANING
              <br />
              SERVICES
            </Link>
          </h1>
        </div>

        {/* Middle Section: Links (Hidden in Mobile) */}
        <div className="hidden md:flex space-x-12 text-lg">
          <Link href="/" className="hover:text-hoverText  text-siteColor py-2">
            Home
          </Link>
          <Link
            replace
            href="/#about"
            className="hover:text-hoverText  text-siteColor py-2"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="group relative">
            <Link
              replace
              href="/#services"
              className="flex items-center hover:text-hoverText  text-siteColor py-2"
            >
              Services
            </Link>
            <div
              className="absolute hidden group-hover:flex bg-white rounded-md z-10 flex-col w-72 group-hover:block pt-4"
              style={{ top: "calc(100% - 4px)" }}
            >
              {" "}
              {/* Close the gap */}
              <Link
                replace
                href="/services/bars-pubs"
                className="block px-4 py-4 hover:text-hoverText  text-siteColor"
              >
                Bars &amp; Pubs
              </Link>
              <Link
                replace
                href="/services/commercial-businesses"
                className="block px-4 py-4 hover:text-hoverText  text-siteColor"
              >
                Commercial Businesses
              </Link>
              <Link
                replace
                href="/services/restaurants-diners-cafes"
                className="block px-4 py-4 hover:text-hoverText  text-siteColor"
              >
                Restaurants, Diners &amp; Cafes
              </Link>
            </div>
          </div>

          <Link
            replace
            href="/#testimonials"
            className="hover:text-hoverText  text-siteColor py-2"
          >
            Testimonials
          </Link>
          <Link
            replace
            href="/contact"
            className="hover:text-hoverText  text-siteColor py-2"
          >
            Contact
          </Link>
        </div>

        {/* Right Section: Phone and Get a Quote */}
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

        {/* Hamburger Menu (Visible in Mobile) */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer(true)}>
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List className="w-64 p-4">
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText>
                  <Link href="/" replace className="text-siteColor">
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText>
                  <Link replace href="/#about" className="text-siteColor">
                    About
                  </Link>
                </ListItemText>
              </ListItem>

              <ListItem button onClick={toggleServices}>
                <ListItemText primary="Services" className="text-siteColor" />
                {isServicesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={isServicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem onClick={toggleDrawer(false)} className="pl-8">
                    <ListItemText>
                      <Link
                        replace
                        href="/services/bars-pubs"
                        className="text-siteColor"
                      >
                        Bars &amp; Pubs
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={toggleDrawer(false)} className="pl-8">
                    <ListItemText>
                      <Link
                        replace
                        href="/services/commercial-businesses"
                        className="text-siteColor"
                      >
                        Commercial Businesses
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={toggleDrawer(false)} className="pl-8">
                    <ListItemText>
                      <Link
                        replace
                        href="/services/restaurants-diners-cafes"
                        className="text-siteColor"
                      >
                        Restaurants, Diners &amp; Cafes
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </Collapse>

              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText>
                  <Link
                    replace
                    href="/#testimonials"
                    className="text-siteColor"
                  >
                    Testimonials
                  </Link>
                </ListItemText>
              </ListItem>

              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText>
                  <Link replace href="/contact" className="text-siteColor">
                    Contact
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
