import React from "react";
import { connect, styled, css } from "frontity";
import Archive from "../archive";
import ArchiveHeader from "../archive/archive-header";
import SectionContainer from "../styles/section-container";
import SearchForm from "./search-form";

const SearchResults = ({ state, libraries }) => {
  const { primary } = state.theme.colors;
  // Get the current path or link
  const currentPath = state.router.link;

  // Get the total pages that match the current path/url
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  // Parse to current url to get the search query
  const parse = libraries.source.parse(state.router.link);

  // Parse returns an object whose query string is stored in "s"
  const searchQuery = parse.query["s"];

  // Since we formatted the query string in the search modal, let's reverse the formatting
  const reverseFormat = query => query.replace("+", " ");

  const { mode } = state.theme;
  const stateColor = 'light' === mode ? "#000" : "#fff";

  return (
    <>
      <ArchiveHeader label="Busqueda" labelColor={primary}>
        <span css={css`color: ${ stateColor } `}>{`“${reverseFormat(searchQuery)}”`}</span>
        <IntroText size="thin">
          {isEmpty ? (
            <Text css={css`color: ${ stateColor } `}>
              No fue posible encontrar ningún resultado para la búsqueda. Prueba nuevamente.
            </Text>
          ) : (
            <Text css={css`color: ${ stateColor } `}>
              Se han encontrado {total} {total === 1 ? "resultado" : "resultados"} para la busqueda.
            </Text>
          )}
        </IntroText>
      </ArchiveHeader>

      {isEmpty ? (
        <SearchContainer size="thin">
          <SearchForm />
        </SearchContainer>
      ) : (
        <Archive showExcerpt={true} showMedia={false} />
      )}
    </>
  );
};

export default connect(SearchResults);

const IntroText = styled(SectionContainer)`
  width: 100%;
  margin-top: 2rem;
  font-weight: initial;

  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;

const Text = styled.p`
  margin: 0 0 1em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchContainer = styled(SectionContainer)`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 6rem;
  }
`;
