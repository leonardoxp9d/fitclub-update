import { TfiCrown } from "react-icons/tfi";
import { RiVipCrownFill } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";

import { FaHeartPulse } from "react-icons/fa6";
import { GiHeartPlus, GiCentaurHeart } from "react-icons/gi";
import { FaCrown } from "react-icons/fa6";
import { CgGym, CgAdidas } from "react-icons/cg";


export const plansData = [
  {
    icon: <GiCentaurHeart/>,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: <LuCrown/>,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    icon: <CgGym/>,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
