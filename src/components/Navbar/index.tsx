import { useState, useContext, useRef, useEffect } from "react";
import Logo from "../Logo";
import { HiMoon, HiBars3BottomRight, HiSun, HiLanguage } from "react-icons/hi2";
import { DataContext } from "../../App";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { motion } from "framer-motion";
import {
  BtnGroup,
  Container,
  NavLink,
  NavLinks,
  Right,
  Wrapper,
} from "./Navbar.styles";

const linksArray: string[] = [
  "home",
  "about",
  "services",
  "portfolio",
  "contact",
];

const langs: string[] = ["en", "ru", "uz"];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const mydata = useContext(DataContext);
  const ref = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

  function myFunction() {
    ref.current?.classList.toggle("show");
  }
  const langBtnClick = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    myFunction();
  };

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    } else i18n.changeLanguage(localStorage.getItem("lang") || "en");
  }, []);

  return (
    <Wrapper>
      <Container className="container">
        {
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <a href="/" onClick={() => mydata?.setActive("home")}>
              <Logo type="main" />
            </a>
          </motion.div>
        }
        {
          <motion.div
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              // delay: 0.1,
            }}
          >
            <Right>
              <NavLinks
                onClick={() => {
                  if (open) {
                    setOpen(false);
                  }
                }}
                style={{
                  left: open ? "calc(-100vw + 110px)" : "calc(-200vw + 110px)",
                }}
              >
                {linksArray.map((link, idx) => (
                  <NavLink
                    className={mydata?.active === link ? "active" : "nonActive"}
                    href={"#" + link}
                    key={idx}
                    onClick={() => mydata?.setActive(link)}
                  >
                    {t(link)}
                  </NavLink>
                ))}
              </NavLinks>
              <BtnGroup>
                <span
                  onClick={() =>
                    mydata?.setMode((p) => (p === "light" ? "dark" : "light"))
                  }
                >
                  <button>
                    {mydata?.mode === "light" ? <HiMoon /> : <HiSun />}
                  </button>
                </span>
                <span className="lang">
                  {/* language changer dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn" onClick={() => myFunction()}>
                      <HiLanguage />
                    </button>
                    <div id="myDropdown" ref={ref} className="dropdown-content">
                      {langs.map((l, i) => (
                        <span onClick={() => langBtnClick(l)} key={i}>
                          <span
                            className={"fi fi-" + (l === "en" ? "gb" : l)}
                          ></span>
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </span>

                <span onClick={() => setOpen((p) => !p)}>
                  <button>
                    <HiBars3BottomRight />
                  </button>
                </span>
              </BtnGroup>
            </Right>
          </motion.div>
        }
      </Container>
    </Wrapper>
  );
};

export default Navbar;
