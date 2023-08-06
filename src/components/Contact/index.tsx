import React from "react";
import SectionTitle from "../SectionTitle";
import { CartsWrapper, Details, FormWrapper, Map } from "./Contact.styles";
import { MdPhone, MdMail, MdLocationPin } from "react-icons/md";
import ContactCart from "../ContactCart";
import ContactForm from "../ContactForm";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type LinkType = {
  text: string;
  link: string;
};

export interface ICarts {
  icon: React.ReactNode;
  name: string;
  infos: LinkType[];
}

const carts: ICarts[] = [
  {
    icon: <MdPhone />,
    name: "Phone",
    infos: [
      {
        text: "(+998) 90 0010203",
        link: "tel:+998900010203",
      },
      {
        text: "(+998) 88 0010203",
        link: "tel:+998880010203",
      },
    ],
  },
  {
    icon: <MdMail />,
    name: "E-mail",
    infos: [
      {
        text: "info@caliber.com",
        link: "mailto:info@caliber.com",
      },
      {
        text: "support@caliber.com",
        link: "mailto:support@caliber.com",
      },
    ],
  },
  {
    icon: <MdLocationPin />,
    name: "Location",
    infos: [
      {
        text: "2, Islam Karimov Street Block 5, 100027, Uzbekistan",
        link: "https://www.google.com/maps/place/Hilton+Tashkent+City/@41.3160117,69.223273,15.11z/data=!4m9!3m8!1s0x38ae8b685b689e13:0xaf4cdf526e02f5e7!5m2!4m1!1i2!8m2!3d41.3139827!4d69.2488975!16s%2Fg%2F11j0bzwlh8?entry=ttu",
      },
    ],
  },
];

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title={t("contact")}
        heading={t("Get in Touch with Us")}
      ></SectionTitle>
      <div className="container">
        <CartsWrapper>
          {carts.map((c, i) => (
            <Animation key={i} delay={0.3} y={30}>
              <ContactCart {...c} />
            </Animation>
          ))}
        </CartsWrapper>
        <Details>
          <Animation delay={0.3} x={40}>
            <FormWrapper>
              <ContactForm />
            </FormWrapper>
          </Animation>
          <Animation delay={0.3} x={-40}>
            <Map>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.685584508967!2d69.223273!3d41.3160117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1690910914106!5m2!1sen!2s"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Map>
          </Animation>
        </Details>
      </div>
    </>
  );
};

export default Contact;
const Animation: React.FC<{
  children: React.ReactNode;
  delay: number;
  x?: number;
  y?: number;
}> = ({ children, delay, x, y }) => (
  <motion.div
    initial={{
      y: y ? y : 0,
      x: x ? x : 0,
      opacity: 0,
    }}
    whileInView={{
      y: 0,
      x: 0,
      opacity: 1,
    }}
    transition={{
      duration: 0.6,
      delay: delay,
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
