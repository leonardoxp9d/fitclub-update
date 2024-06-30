import { LuCrown } from "react-icons/lu";
import { GiCentaurHeart } from "react-icons/gi";
import { CgGym } from "react-icons/cg";


export const plansData = [
  {
    icon: <GiCentaurHeart aria-label="heart icon"/>,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: <LuCrown aria-label="crown icon"/>,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    icon: <CgGym aria-label="dumbbell icon"/>,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
