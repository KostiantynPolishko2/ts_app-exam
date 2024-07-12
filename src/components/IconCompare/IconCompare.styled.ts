import styled from 'styled-components';

export const IconCompareWrapper = styled.span`
    width: fit-content;
    
    & > i {
        background-color: lightgray;
        color: whitesmoke;
        font-size: 25px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 3px;
    }

    & > i:hover {
        text-shadow: -2px 4px 6px gray;
    }
`;
