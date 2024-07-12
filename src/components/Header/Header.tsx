import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { RowFlagBlue, RowFlagYellow, BlockMenu, CompareCar } from './Header.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';

interface HeaderProps {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
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
            <span>car1</span>
            <span>car2</span>
         </CompareCar>
      </HeaderWrapper>
   );
}

export default Header;
