import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import { NewsLetter } from "./custom/newsletter";
import ThemeMode from "./custom/theme-mode";

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = event => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>Ir arriba</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <NewsLetter/>
      <SiteFooterInner>
        <Credits>
          <Copyright>
            &copy; {currentYear}{" · "}
            <StyledLink link={state.frontity.url}>{state.frontity.title}</StyledLink>
            {" · "}
            <ThemeMode />
          </Copyright>
        </Credits>
        <BackToTop />
      </SiteFooterInner>
    </SiteFooter>
  );
};

export default connect(Footer);

const SiteFooterInner = styled(SectionContainer)`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: ${props => props.bg};
  color: #000000;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.8rem;
    padding: 4.3rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin: 0;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;

const StyledLink = styled(Link)`
  margin: 0px 5px;
`;
