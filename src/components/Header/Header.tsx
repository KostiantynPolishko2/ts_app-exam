import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { RowFlagBlue, RowFlagYellow } from './Header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
   <HeaderWrapper>
      <RowFlagBlue/>
      <RowFlagYellow/>
   </HeaderWrapper>
);

export default Header;
