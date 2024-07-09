import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { RowFlagBlue, RowFlagYellow, BlockMenu } from './Header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = (): React.FunctionComponentElement<HeaderProps> => (
   <HeaderWrapper>
      <RowFlagBlue/>
      <RowFlagYellow/>
      <BlockMenu/>
   </HeaderWrapper>
);

export default Header;
