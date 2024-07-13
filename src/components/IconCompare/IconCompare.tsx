import React, { FC, FunctionComponentElement, useContext } from 'react';
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

export const handleSwitchOnIconHeart = (e: React.FormEvent<HTMLElement>, models: Array<string>): void =>{
   const arrHtml = (e.currentTarget.getRootNode().lastChild?.lastChild as HTMLBodyElement).querySelectorAll('div.car-photo');
   const size = arrHtml.length;
   for(let i = 0; i != size; i++){
      const model: string = arrHtml[i].querySelector('span.model')?.textContent?.toLowerCase() || '';
      if(model !== models[0] && model !== models[1]){
         (arrHtml[i].querySelector('i.fa-heart') as HTMLElement).style.color = 'whitesmoke';
      }
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
