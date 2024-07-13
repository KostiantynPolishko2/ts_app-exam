import styled from 'styled-components';

const DisplayCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const CompareWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 300px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
    margin: 5px;
    padding: 5px;
`;

type ImgPath = {
    _imgPath: string,
}

export const DataMarkModelWrapper = styled(DisplayCenter)<ImgPath>`
    width: 90%;
    height: 90%;
    background-image: url(${props => props._imgPath});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    & > p {
        width: auto;
        padding: 5px 0;
        margin: 0 0 0 10px;
        color: white;
        text-shadow: 3px 3px 5px black;
    };
    & span {
        background-color: rgb(135, 206, 250, 0.5);
        position: absolute;
        right: 5%;
        padding: 2px 5px;
        width: 120px;
    };
`;

export const ErrorMarkModelWrapper = styled.div`
    background-color: lightgrey;
`;