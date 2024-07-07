import React, { FC } from 'react';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';

interface BurgerMenuProps {}

const hideShowMenu = (e: React.FormEvent<HTMLElement>): void => {
   const links: HTMLElement = e.currentTarget.nextElementSibling as HTMLElement;
   links.style.display = (links.style.display === 'none'? 'block' : 'none');
}

const BurgerMenu: FC<BurgerMenuProps> = () => (
 <BurgerMenuWrapper className='topnav'>
   <a className='icon' onClick={hideShowMenu}>
      <i className='fa fa-bars'></i>
   </a>
   <div id="myLinks">
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
   </div>
   <a href="#home" className="active">Compare</a>
 </BurgerMenuWrapper>
);

export default BurgerMenu;
