import React, { FC, ReactElement } from 'react';
import { SectionWrapper } from './Section.styled';
import Number from './SubSection/Number';
import VinCode from './SubSection/VinCode';
import Compare from './SubSection/Compare';
import { Route, Routes } from 'react-router-dom';

export interface ILinks {
    number: string,
    vincode: string,
    compare: string
}

interface SectionProps extends ILinks{
    _isDisplay: string
}

const Section: FC<SectionProps> = (props): React.FunctionComponentElement<SectionProps> => (
    <SectionWrapper style={{display: `${props._isDisplay}`}}>
        <Routes>
            <Route loader path={props.number} element={<Number />}/>
            <Route path={props.vincode} element={<VinCode />}/>
            <Route path={props.compare} element={<Compare/>}/>
        </Routes>
    </SectionWrapper>
);

export default Section;