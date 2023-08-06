import React from "react";
import { Body, Container, Heading, Wrapper } from "./AboutFacts.styles";
import { LuCheckSquare, LuAward, LuHeart, LuCode2 } from "react-icons/lu";
import { AiOutlineComment } from "react-icons/ai";
import FunFactItem from "../FunFactItem";
import { useTranslation } from "react-i18next";

export interface IFacts {
  icon: React.ReactNode;
  number: string;
  title: string;
}
const facts: IFacts[] = [
  {
    icon: <LuCheckSquare />,
    number: "1050+",
    title: "projects completed",
  },
  {
    icon: <LuHeart />,
    number: "810",
    title: "happy clients",
  },
  {
    icon: <LuAward />,
    number: "1390",
    title: "design awards",
  },
  {
    icon: <LuCode2 />,
    number: "55k",
    title: "line of codes",
  },
  {
    icon: <AiOutlineComment />,
    number: "24/7",
    title: "fast support",
  },
];

const AboutFacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="layer"></div>
      <Container>
        <Heading>{t("Fun Facts About Our Agency")}</Heading>
        <Body>
          {facts.map((f, i) => (
            <FunFactItem {...f} key={i} delay={(i + 1) / 10} />
          ))}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default AboutFacts;
