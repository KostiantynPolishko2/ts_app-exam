import styled from 'styled-components';

export const CenterPosition = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const HeaderWrapper = styled.div`
    position: relative;
    height: 90px;
`;

export const RowFlagBlue = styled.div`
    height: 50%;
    background-color: rgb(0, 87, 183);
`;

export const RowFlagYellow = styled.div`
    height: 50%;
    background-color: rgb(255, 215, 0);
`;

export const BlockMenu = styled(CenterPosition)`
    width: 70%;
    height: 55%;
`;

export const CompareCar = styled(CenterPosition)`
    width: 15%;
    height: 50%;
    left: 72%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    & > span {
        margin-right: 5px;
        color: aliceblue;
        text-shadow: 3px 3px 3px black;
    }
`;