import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Welcome to my personal portfolio, a platform that showcases my skills
        and achievements as a front-end developer. My passion for technology and
        design is evident in my work, as I strive to create beautiful and
        responsive websites that provide a seamless user experience.
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/nataliia-taranovska-1a0592233/",
            "_blank"
          )
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
