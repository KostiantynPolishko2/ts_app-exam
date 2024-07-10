import React, { FC, useContext } from 'react';
import { SectionWrapper } from './Section.styled';
import Number from './SubSection/Number';
import VinCode from './SubSection/VinCode';
import Compare from './SubSection/Compare';
import { Route, Routes } from 'react-router-dom';
import { SectionTopContext } from '../MainPage/MainPage';

export interface ILinks {
    number: string,
    vincode: string,
    compare: string,
}

interface SectionProps extends ILinks{
    _isDisplay?: string
}

const Section: FC<SectionProps> = (props): React.FunctionComponentElement<SectionProps> => {

    const _top = useContext(SectionTopContext);

    return (
        <SectionWrapper style={{display: `${props._isDisplay}`, top: `${_top || 15}%`}}>
            <Routes >
                <Route path={props.number} element={<Number/>}/>
                <Route path={props.vincode} element={<VinCode />}/>
                <Route path={props.compare} element={<Compare/>}/>
            </Routes>
        </SectionWrapper>
    );
}

export default Section;