import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { RowFlagBlue, RowFlagYellow, BlockMenu, CompareCar } from './Header.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';

interface HeaderProps {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
   _carsModel: Array<string>,
}

const Header: FC<HeaderProps> = (props): React.FunctionComponentElement<HeaderProps> => {

   return (
      <HeaderWrapper>
         <RowFlagBlue/>
         <RowFlagYellow/>
         <p className='header_name'>База Гаи 2024</p>
         <BlockMenu>
            <BurgerMenu 
               number='/number' vincode='/vincode' compare='/compare' 
               _isDisplay={props._isDisplay} _handleDisplay={props._handleDisplay}
               />
         </BlockMenu>
         <CompareCar>
            <span>{props._carsModel[0] || 'none0'}</span>
            <span>{props._carsModel[1] || 'none1'}</span>
         </CompareCar>
      </HeaderWrapper>
   );
}

export default Header;
