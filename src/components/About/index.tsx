import React from "react";
import AboutContent from "../AboutContent";
import SectionTitle from "../SectionTitle";
import about1 from "../../utils/images/about1.svg";
import about2 from "../../utils/images/about2.svg";
import about3 from "../../utils/images/about3.svg";
import AboutFacts from "../AboutFacts";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title={t("about us")}
        heading={t("We provide best service for you customers")}
      >
        {t(
          "Our foundation rests on a customer-centric philosophy, where every decision, every innovation, and every interaction revolves around elevating experiences and fostering growth."
        )}
      </SectionTitle>
      <div className="container" style={{ overflow: "hidden" }}>
        <AboutContent
          xValue={-100}
          position="left"
          heading={t(
            "We are branding strategy service from 2022 for our customers."
          )}
          text={t(
            "Your success is our top priority. We take pride in fostering strong relationships with our clients, built on trust, transparency, and open communication. Our client-centric philosophy means that we value your insights and collaborate closely with you every step of the way."
          )}
          image={about1}
        />
        <AboutContent
          xValue={100}
          position="right"
          heading={t("Get Started with our software")}
          text={t(
            "Your success is our top priority. We take pride in fostering strong relationships with our clients, built on trust, transparency, and open communication. Our client-centric philosophy means that we value your insights and collaborate closely with you every step of the way."
          )}
          image={about2}
        />
        <AboutContent
          xValue={-100}
          position="left"
          heading={t("Solve your problem faster")}
          text={t(
            "Your success is our top priority. We take pride in fostering strong relationships with our clients, built on trust, transparency, and open communication. Our client-centric philosophy means that we value your insights and collaborate closely with you every step of the way."
          )}
          image={about3}
        />
      </div>
      <AboutFacts />
    </>
  );
};

export default About;
