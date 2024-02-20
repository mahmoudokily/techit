/** @format */

export type Link = {
  to: string;
  text: string;
  id?: string;
  action?: string;
  roles: string[];
};

const links: Link[] = [
  {
    to: "/",
    text: "home",
    id: "hero",
    roles: [],
  },
  {
    to: "/",
    text: "consulting",
    id: "about",
    roles: [],
  },
  {
    to: "/",
    text: "contact",
    id: "contact",
    roles: [],
  },
  {
    to: "/work-with-us",
    text: "work with us",
    id: "jobs",
    roles: ["workWithUs"],
  },
];

export default links;
