import React, { FC, ReactElement } from 'react';
import { CompareWrapper } from './Compare.styled';
import CompareMarkModel from '../../Compare/CompareMarkModel';

const Compare: FC = (): ReactElement => (
    <CompareWrapper>
        <p style={{float: 'none'}}>Section Compare</p>
        <div>
            <CompareMarkModel modelMark='dodge durango'/>
            <CompareMarkModel modelMark='mitsubishi lancer'/>
        </div>
    </CompareWrapper>
);

export default Compare;
