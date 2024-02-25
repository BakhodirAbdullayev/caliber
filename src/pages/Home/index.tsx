import React from "react";
// import { DataContext } from "../../App";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import Service from "../../components/Service";
import Showcase from "../../components/Showcase";
import {
  SectionWrapper,
  HomeContainer,
  ShowcaseWrapper,
  ContactWrapper,
} from "./Home.styles";

const Home: React.FC = () => {
  // const mydata = React.useContext(DataContext);

  // useEffect(() => {
  //   const scroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     sections.forEach((sec) => {
  //       const top = window.scrollY;
  //       const offset = sec.offsetTop;
  //       const height = sec.offsetHeight;
  //       const id = sec.getAttribute("id");

  //       if (top >= offset && top < offset + height - 200) {
  //         if (typeof id === "string") {
  //           mydata?.setActive(id);
  //         }
  //       }
  //     });
  //   };
  //   window.onscroll = () => scroll();
  //   scroll();
  //   return (window.onscroll = () => scroll());
  // }),
  [];
  return (
    <HomeContainer>
      <SectionWrapper id="home">
        <ShowcaseWrapper>
          <Showcase />
        </ShowcaseWrapper>
      </SectionWrapper>
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="services">
        <Service />
      </SectionWrapper>
      <SectionWrapper id="portfolio">
        <Portfolio />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <ContactWrapper>
          <Contact />
        </ContactWrapper>
      </SectionWrapper>
    </HomeContainer>
  );
};

export default Home;
