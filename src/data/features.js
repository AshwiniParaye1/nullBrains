// src/data/features.js

import { CiBullhorn } from "react-icons/ci";
import { FaBox, FaCubes } from "react-icons/fa";
import { PiLegoSmileyLight } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";
import { VscTerminal } from "react-icons/vsc";

export const features = [
  {
    title: "Certifications",
    description:
      "Each of our plan will provide you and your team with certifications.",
    icon: TbFileCertificate,
  },
  {
    title: "Notifications",
    description:
      "Send out notifications to all your customers to keep them engaged.",
    icon: CiBullhorn,
  },
  {
    title: "Bundles",
    description: "High-quality bundles of awesome tools to help you out.",
    icon: FaBox,
  },
  {
    title: "Developer Tools",
    description:
      "Developer tools to help grow your application and keep it up-to-date.",
    icon: VscTerminal,
  },
  {
    title: "Building Blocks",
    description:
      "The right kind of building blocks to take your company to the next level.",
    icon: FaCubes,
  },
  {
    title: "Coupons",
    description:
      "Coupons system to provide special offers and discounts for your app.",
    icon: PiLegoSmileyLight,
  },
];
