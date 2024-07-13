import styled from 'styled-components';

export const DisplayCenter = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const CompareMarkModelWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 300px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
    margin: 5px;
    padding: 5px;
    float: left;
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
    & p {
        width: auto;
        padding: 5px 0;
        margin: 0 0 0 10px;
        color: white;
        text-shadow: 3px 3px 5px black;
        float: none;
    };
    & span {
        position: absolute;
        float: none;
        background-color: rgb(135, 206, 250, 0.5);
        right: 1%;
        padding: 2px 5px;
        width: 150px;
    };
`;

export const ErrorMarkModelWrapper = styled(DisplayCenter)`
    background-color: lightgoldenrodyellow;
    width: 90%;
    height: 90%;
    background-image: url(${require('./img/error404.jpg')});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    & > div {
        top: 85%;
    };
    & p {
        margin: 0;
        padding: 0;
        float: none;
        text-align: center;
        color: red;
        font-size: 20px;
        font-weight: 700;
        text-shadow: 1px 1px 2px black;
    }
`;