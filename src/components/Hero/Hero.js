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
        I am a front-end developer with a passion for learning new technologies
        and creating beautiful, responsive websites.
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
