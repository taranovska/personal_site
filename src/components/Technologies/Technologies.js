import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiJest,
  SiRedux,
  SiStyledComponents,
  SiNextDotJs,
  SiFirebase,
  SiMaterialUi,
  SiGithub,
  SiNetlify,
  SiVisualstudiocode,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiReactrouter,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BsFillBootstrapFill } from "react-icons/bs";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      As a front-end developer, I have extensive experience working with a
      variety of technologies in the web development world. My knowledge of
      JavaScript, React.js, TS, Next.js has allowed me to create beautiful and
      responsive websites that provide a seamless user experience.
    </SectionText>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <SocialIcons href="">
        <SiTypescript
          size="3rem"
          onClick={() =>
            window.open("https://www.typescriptlang.org/", "_blank")
          }
        />
      </SocialIcons>
      <SocialIcons href="">
        <GrReactjs
          size="3rem"
          onClick={() => window.open("https://reactjs.org/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiNextDotJs
          size="3rem"
          onClick={() => window.open("https://nextjs.org/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiJavascript
          size="3rem"
          onClick={() => window.open("https://www.javascript.com/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <BsFillBootstrapFill
          size="3rem"
          onClick={() => window.open("https://getbootstrap.com/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiJest
          size="3rem"
          onClick={() => window.open("https://jestjs.io/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiStyledComponents
          size="3rem"
          onClick={() =>
            window.open("https://styled-components.com/", "_blank")
          }
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiRedux
          size="3rem"
          onClick={() => window.open("https://redux.js.org/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiFirebase
          size="3rem"
          onClick={() => window.open("https://firebase.google.com/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiMaterialUi
          size="3rem"
          onClick={() => window.open("https://mui.com/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiGithub
          size="3rem"
          onClick={() => window.open("https://github.com/taranovska", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiNetlify
          size="3rem"
          onClick={() => window.open("https://www.netlify.com/", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiVisualstudiocode
          size="3rem"
          onClick={() =>
            window.open("https://code.visualstudio.com/", "_blank")
          }
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiHtml5
          size="3rem"
          onClick={() =>
            window.open(
              "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
              "_blank"
            )
          }
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiCss3
          size="3rem"
          onClick={() =>
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/CSS",
              "_blank"
            )
          }
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiReactrouter
          size="3rem"
          onClick={() =>
            window.open("https://reactrouter.com/en/main", "_blank")
          }
        />
      </SocialIcons>
      <SocialIcons href="">
        <SiFigma
          size="3rem"
          onClick={() => window.open("https://www.figma.com/", "_blank")}
        />
      </SocialIcons>
    </div>

    <SectionDivider />
  </Section>
);

export default Technologies;
