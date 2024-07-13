import styled from 'styled-components';
import { MiddlePosition } from '../Section/Section.styled';

interface IFormSearch {
    _display?: string
}

export const FormSearchWrapper = styled(MiddlePosition)<IFormSearch>`
    width: 85vw;
    margin-top: 1.0rem;
    display: ${props => props._display || 'none'};
`;
