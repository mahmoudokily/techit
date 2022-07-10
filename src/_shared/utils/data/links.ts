export type Link = {
  to?: string;
  text: string;
  id?: string;
  action?: string;
};

const links: Link[] = [
  {
    to: "/",
    text: "About",
    id: "about",
  },
  {
    to: "/pricing",
    text: "Pricing",
  },
  {
    to: "/signup",
    text: "Contact",
  },
];

export default links;
