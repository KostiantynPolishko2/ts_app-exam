import React, { FC, ReactElement } from 'react';
import { CompareWrapper } from './Compare.styled';
import CompareMarkModel from '../../Compare/CompareMarkModel';

interface CompareProps {
    markModels: Array<string>
}

const Compare: FC<CompareProps> = (props): React.FunctionComponentElement<HTMLElement> => (
    <CompareWrapper>
        <p style={{float: 'none'}}>Section Compare</p>
        <div>
            <CompareMarkModel modelMark={props.markModels[0]}/>
            <CompareMarkModel modelMark={props.markModels[1]}/>
        </div>
    </CompareWrapper>
);

export default Compare;
