import styled, { css } from 'styled-components';
import Hamburger from 'hamburger-react';

export const BurgerMenuWrapper = styled.div.attrs({
    className: 'test'
})`

`;

export const BtnBurgerMenu = styled(Hamburger).attrs({
})`
    background-color: grey;
`;