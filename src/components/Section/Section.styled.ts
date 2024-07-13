import styled from 'styled-components';

export const MiddlePosition = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const SectionWrapper = styled(MiddlePosition)`
    min-width: max-content;
    margin: 10px 0;
    background-color: whitesmoke;
    box-shadow: 3px 3px 6px lightgray;
`;