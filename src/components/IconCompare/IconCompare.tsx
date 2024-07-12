import React, { FC, useContext } from 'react';
import { IconCompareWrapper } from './IconCompare.styled';
import 'the-new-css-reset';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CarsModelContext } from '../MainPage/MainPage';

interface IconCompareProps {
   iconame: string;
}

export const handleIcon = (e: React.FormEvent<HTMLElement>):void =>{
   const ielement = (e.currentTarget.querySelector('i.fas') as HTMLElement);
   if(ielement.classList.contains('fa-heart')){
      ielement.style.color = ielement.style.color !== 'red'? 'red': 'whitesmoke';
   }
   else{
      ielement.style.color = ielement.style.color !== 'blue'? 'blue': 'whitesmoke';
   }
}

const IconCompare: FC<IconCompareProps> = ({iconame}): React.FunctionComponentElement<IconCompareProps> => {

   const handleModel = useContext(CarsModelContext);
   return (
      <IconCompareWrapper className='icon' onClick={handleModel}>
         <i className={`fas ${iconame}`}></i>
      </IconCompareWrapper>
   );
}

export default IconCompare;
