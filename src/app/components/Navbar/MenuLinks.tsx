export interface SubLink {
  Head: string;
  link: string;
}

export interface LinkType {
  name: string;
  link: string;
  submenu?: boolean;
  sublinks?: SubLink[];
}

export const links: LinkType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Services",
    link: "/#services",
    submenu: true,
    sublinks: [
      {
        Head: "Restaurants, Diners & Cafes",
        link: "/services/restaurants-diners-cafes",
      },
      {
        Head: "Bars & Pubs",
        link: "/services/bars-pubs",
      },
      {
        Head: "Commercial Businesses",
        link: "/services/commercial-businesses",
      },
    ],
  },
  {
    name: "Testimonials",
    link: "/#testimonials",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
