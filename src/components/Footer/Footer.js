import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +372 54 37 01 94">+372 54 37 01 94</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:taranovskanataliia@gmail.com">
            taranovskanataliia@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Learning is a treasure that will follow its owner everywhere
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="">
            <AiFillGithub
              size="3rem"
              onClick={() =>
                window.open("https://github.com/taranovska", "_blank")
              }
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
