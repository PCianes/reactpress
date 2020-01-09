import { connect, styled, css } from "frontity";
import React from "react";
import SectionContainer from "../styles/section-container";

const Header = ({ state, label, children, labelColor }) => {
  const { mode } = state.theme;
  return (
    <ArchiveHeader css={css`background-color: ${ 'light' === mode ? "#fff" : "#222" };`}>
      <ArchiveHeaderInner>
        <ArchiveTitle>
          <ColoredText color={labelColor}>{ "category" == label ? "Categoría" : label }: </ColoredText>
          {children}
        </ArchiveTitle>
      </ArchiveHeaderInner>
    </ArchiveHeader>
  );
};

export default connect(Header);


const ArchiveHeader = styled.header`
  color: #000000;
  text-align: center;
  background-color: #fff;
  padding: 4rem 0;

  @media (min-width: 700px) {
    padding: 8rem 0;
  }
`;

const ArchiveHeaderInner = SectionContainer;

const ArchiveTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.026666667em;
  margin: 0;

  @media (min-width: 700px) {
    font-size: 3.2rem;
  }
`;

const ColoredText = styled.span`
  color: ${props => props.color};
  text-transform: capitalize;
`;
