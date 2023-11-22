import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";

export const features = {
  label: "what we offer",
  data: [
    {
      name: "best security",
      description:
        "We offer the best data security to our clients, which makes us stand out",
      icon: BsFillShieldLockFill,
      imgClass: "one",
    },
    {
      name: "ease of use",
      description: "our system is easy to use and integrate",
      icon: IoIosOptions,
      imgClass: "two",
    },
    {
      name: "maintenance",
      description:
        "our code is written in highest standards, which makes it highly sustainable",
      icon: GrHostMaintenance,
      imgClass: "three",
    },
    {
      name: "24/7 support",
      description: "our team is available at all times in case you need us",
      icon: BiSupport,
      imgClass: "four",
    },
    {
      name: "price",
      description: "we offer the highest value/cost ratio",
      icon: BiDollar,
      imgClass: "five",
    },
    {
      name: "scalable",
      description:
        "our servers are located all over the world, therefore improving scalability and speed",
      icon: AiOutlineCloudUpload,
      imgClass: "six",
    },
  ],
};
