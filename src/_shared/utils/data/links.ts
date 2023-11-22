export type Link = {
  to: string;
  text: string;
  id?: string;
  action?: string;
};

const links: Link[] = [
  {
    to: "/",
    text: "home",
    id: "hero",
  },
  {
    to: "/",
    text: "consulting",
    id: "about",
  },
  {
    to: "/",
    text: "contact",
    id: "contact",
  },
  {
    to: "/work-with-us",
    text: "work with us",
    id: "jobs",
  },
];

export default links;
