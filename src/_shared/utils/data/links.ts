export type Link = {
  to?: string;
  text: string;
  id?: string;
  action?: string;
};

const links: Link[] = [
  {
    to: "/",
    text: "Home",
    id: "about",
  },
  {
    to: "/consulting",
    text: "consulting",
  },
  {
    to: "/contact",
    text: "contact",
    id: "contact",
  },
  {
    to: "/available-roles",
    text: "work with us",
  },
];

export default links;
