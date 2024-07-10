import styled, { css } from 'styled-components';
import { PhotoImg, Display } from './General.styled';

const _margin = 15;
const _padding = 5;

const _default: string = 'fit-content';

interface Size {
    _width?: number,
    _height?: number,
    _border?: string,
}

const main__br_radius = css`
    border-radius: 10px 0px 0px 10px;
`;

const next__br_radius = css`
    border-radius: 10px 10px 0px 0px;
`;

export const CarPhotoWrapper = styled.div<Size>`
    position: relative;
    margin: 5px;
    border: 1px solid black;
    width: ${props => props._width? props._width+'px' : _default};
    height: ${props => props._height? props._height+'px' : _default};
    ${props => props._border === 'main'? main__br_radius : next__br_radius}
`;

export const CarPhotoImg = styled(PhotoImg).attrs({
    alt: 'cars photo',
})`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const CarPhotoInner = styled(Display)`
    position: absolute;
    top: ${_margin}px;
    left: ${_margin}px;
    right: ${_margin}px;
    bottom: ${_margin}px;
    padding: ${_padding}px;
`;

export const ContentTop = styled(Display)`
    width: 100%;
`;

export const ContentBottom = styled(Display)`
    width: 100%;
`;