import React, { FC, FunctionComponentElement, ReactHTMLElement, ReactNode } from 'react';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import Hamburger from 'hamburger-react';

interface BurgerMenuProps {}

const hideShowBurger = (flag: boolean, links: HTMLElement) => {

   flag? console.log('ShowBurger') : console.log('HideBurger');
   flag? links.style.display = 'block' : links.style.display = 'none';
}

const BurgerMenu: FC<BurgerMenuProps> = (): React.FunctionComponentElement<BurgerMenuProps> => {

   const links = document.getElementById('myLinks') as HTMLElement;

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            onToggle={flag => {hideShowBurger(flag, links)}}/>
         </div>
         
         <div id="myLinks">
               <a href="#news">Number</a>
               <a href="#contact">VinCode</a>
               <a href="#about">MarkModel</a>
               <a href="#about">Region</a>
               <a href="#about">Price</a>
         </div>
         <a href="#home" className="active">Compare</a>
      </BurgerMenuWrapper>
     );
}

export default BurgerMenu;
