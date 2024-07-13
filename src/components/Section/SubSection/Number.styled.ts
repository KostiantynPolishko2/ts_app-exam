import styled from 'styled-components';

const DisplayCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NumberWrapper = styled(DisplayCenter)`
    flex-direction: column;
    background-color: aliceblue;
`;

export const SecondRaw = styled(DisplayCenter)`
    justify-content: space-around;
`;