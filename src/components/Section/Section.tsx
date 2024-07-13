import React, { FC, useContext } from 'react';
import { SectionWrapper } from './Section.styled';
import Number from './SubSection/Number';
import VinCode from './SubSection/VinCode';
import Compare from './SubSection/Compare';
import { Route, Routes } from 'react-router-dom';
import { SectionTopContext, CarNumberContext } from '../MainPage/MainPage';

export interface ILinks {
    number: string,
    vincode: string,
    compare: string,
}

interface SectionProps extends ILinks{
    _isDisplay?: string,
    _carsModel: Array<string>,
}

const Section: FC<SectionProps> = (props): React.FunctionComponentElement<SectionProps> => {

    const _top = useContext(SectionTopContext);
    const _carNumber = useContext(CarNumberContext);

    const messageFC = <div style={{backgroundColor: 'gray'}}><p style={{color: 'red'}}>Select two cars</p></div>

    return (
        <SectionWrapper style={{display: `${props._isDisplay}`, top: `${_top || 15}%`}}>
            <Routes >
                {_carNumber !== 'none'? <Route path={props.number} element={<Number carNumber={_carNumber}/>}/> : <></>}
                <Route path={props.vincode} element={<VinCode />}/>
                {props._carsModel.length === 2? <Route path={props.compare} element={<Compare markModels={props._carsModel}/>}/> : <Route path={props.compare} element={messageFC}/>}
            </Routes>
        </SectionWrapper>
    );
}

export default Section;