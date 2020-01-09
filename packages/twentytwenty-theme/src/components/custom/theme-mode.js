import React from "react";
import { connect, styled } from "frontity";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeMode = ({ actions, state }) => {
    const { setLightMode, setDarkMode } = actions.theme;
    const { mode } = state.theme;
    return (
        <Container>
            <ButtonsStyled isSelected={ mode === 'light' } onClick={ setLightMode }><FaSun /></ButtonsStyled>
            <ButtonsStyled isSelected={ mode === 'dark' } onClick={ setDarkMode }><FaMoon /></ButtonsStyled>
        </Container>
    )
}

export default connect(ThemeMode);

const Container = styled.div`
    display: flex;
`;

const ButtonsStyled = styled.button`
    padding: 5px;
    border: 0;
    background-color: transparent;
    display: ${({ isSelected }) => (isSelected ? 'none': 'block')};
    cursor: pointer;
`;