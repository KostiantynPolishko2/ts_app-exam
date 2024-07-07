import React, { FC } from 'react';
import { RcInputNumberWrapper } from './RcInputNumber.styled';
import InputNumber from 'rc-input-number';

interface RcInputNumberProps {}

interface Input {
   value: String | Number,
}

const RcInputNumber: FC<RcInputNumberProps> = () => {

   const upElem = <p style={{backgroundColor: 'red', width: 'fit-content'}}>UpHendler</p>

   return (
      <RcInputNumberWrapper>
         RcInputNumber Component
         <InputNumber 
         placeholder='enter'
         disabled={false}
         required={false}
         upHandler={upElem}
         formatter={value => `${value}`.replace(/[a-z]/gi, x => x.toLocaleUpperCase())}
         inputMode='text'
         parser={input => `${input}`.replace(/[a-z]/gi, x => x.toLocaleUpperCase())}
         />
      </RcInputNumberWrapper>
     );
}

export default RcInputNumber;
