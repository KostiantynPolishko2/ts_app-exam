import React, { FC, useState } from 'react';
import { HeaderWrapper } from './Header.styled';
import { RowFlagBlue, RowFlagYellow, BlockMenu } from './Header.styled';
import { BrowserRouter } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

interface HeaderProps {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
}

const Header: FC<HeaderProps> = (props): React.FunctionComponentElement<HeaderProps> => {

   return (
      <HeaderWrapper>
         <RowFlagBlue/>
         <RowFlagYellow/>
         <BlockMenu>
            <BurgerMenu 
               number='/number' vincode='/vincode' compare='/compare' 
               _isDisplay={props._isDisplay} _handleDisplay={props._handleDisplay}
               />
         </BlockMenu>
      </HeaderWrapper>
   );
}

export default Header;
