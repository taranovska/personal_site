import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Nataliia Taranovska</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="">
        <AiFillGithub
          size="3rem"
          onClick={() => window.open("https://github.com/taranovska", "_blank")}
        />
      </SocialIcons>
      <SocialIcons href="">
        <AiFillLinkedin
          size="3rem"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nataliia-taranovska-1a0592233/",
              "_blank"
            )
          }
        />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
