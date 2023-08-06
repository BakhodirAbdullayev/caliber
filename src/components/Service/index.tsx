import React from "react";
import SectionTitle from "../SectionTitle";
import { TfiRulerPencil } from "react-icons/tfi";
import { IoUmbrellaOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsClipboard2Data } from "react-icons/bs";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { Box, Pricing } from "./Service.styles";
import ServiceCart from "../ServiceCart";
import PriceCart from "../PriceCart";
import { useTranslation } from "react-i18next";

export interface IServices {
  icon: React.ReactNode;
  heading: string;
  text: string;
}
export interface IPrice {
  name: string;
  money: number;
  offers: string[];
  popular: boolean;
}
const services: IServices[] = [
  {
    icon: <TfiRulerPencil />,
    heading: "Super Design Layout",
    text: "Parumitsum clarits, it solemne fiant futuris magna netsum adipisci elit , hendris itsum mis salit ets lorem ipsum sed interdut wisi net quis aspernitur aut odit fugitus justo sed mauris vel, lobortis tempor.",
  },
  {
    icon: <IoUmbrellaOutline />,
    heading: "Responsive & Retina Ready",
    text: "Parumitsum clarits, it solemne fiant futuris magna netsum adipisci elit , hendris itsum mis salit ets lorem ipsum sed interdut wisi net quis aspernitur aut odit fugitus justo sed mauris vel, lobortis tempor.",
  },
  {
    icon: <FaRegComments />,
    heading: "24/7 Amazing Support",
    text: "Parumitsum clarits, it solemne fiant futuris magna netsum adipisci elit , hendris itsum mis salit ets lorem ipsum sed interdut wisi net quis aspernitur aut odit fugitus justo sed mauris vel, lobortis tempor.",
  },
  {
    icon: <HiOutlineWrenchScrewdriver />,
    heading: "Fully Customizable",
    text: "Parumitsum clarits, it solemne fiant futuris magna netsum adipisci elit , hendris itsum mis salit ets lorem ipsum sed interdut wisi net quis aspernitur aut odit fugitus justo sed mauris vel, lobortis tempor.",
  },
  {
    icon: <BsClipboard2Data />,
    heading: "SEO Ready Code",
    text: "Parumitsum clarits, it solemne fiant futuris magna netsum adipisci elit , hendris itsum mis salit ets lorem ipsum sed interdut wisi net quis aspernitur aut odit fugitus justo sed mauris vel, lobortis tempor.",
  },
  {
    icon: <AiOutlineDeploymentUnit />,
    heading: "Unlimited Options",
    text: "Parumitsum clarits, it solemne fiant futuris magna netsum adipisci elit , hendris itsum mis salit ets lorem ipsum sed interdut wisi net quis aspernitur aut odit fugitus justo sed mauris vel, lobortis tempor.",
  },
];
const prices: IPrice[] = [
  {
    name: "basic",
    money: 25,
    offers: [
      "Unlimited Reservations",
      "6 Clients and Products",
      "Housekeeping Status",
      "Invoicing and Payments",
      "Data Security and Backups",
    ],
    popular: false,
  },
  {
    name: "standard",
    money: 99,
    offers: [
      "Unlimited Reservations",
      "6 Clients and Products",
      "Housekeeping Status",
      "Invoicing and Payments",
      "Data Security and Backups",
    ],
    popular: true,
  },
  {
    name: "pro",
    money: 199,
    offers: [
      "Unlimited Reservations",
      "6 Clients and Products",
      "Housekeeping Status",
      "Invoicing and Payments",
      "Data Security and Backups",
    ],
    popular: false,
  },
];

const Service: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <SectionTitle
        title={t("services")}
        heading={t(
          "Explore a Wide Range of Tailored Services to Elevate Your Business"
        )}
      >
        {t(
          "We are dedicated to elevating your business to new heights through innovative IT services and personalized support. With a team of skilled professionals, cutting-edge technology, and a passion for excellence, we strive to exceed your expectations and deliver results that matter."
        )}
      </SectionTitle>
      <Box>
        {services.map((s, i) => (
          <ServiceCart key={i} {...s} />
        ))}
      </Box>
      <Pricing>
        {prices.map((p, i) => {
          return i % 3 === 0 ? (
            <PriceCart key={i} {...p} x={-80} />
          ) : i % 3 === 1 ? (
            <PriceCart key={i} {...p} y={100} />
          ) : (
            <PriceCart key={i} {...p} x={80} />
          );
        })}
      </Pricing>
    </div>
  );
};

export default Service;
