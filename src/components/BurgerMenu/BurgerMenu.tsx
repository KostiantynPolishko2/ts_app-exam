import React, { FC, useState } from 'react';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import Hamburger from 'hamburger-react';
import { EmitFlags } from 'typescript';

interface BurgerMenuProps {}


const BurgerMenu: FC<BurgerMenuProps> = (): React.FunctionComponentElement<BurgerMenuProps> => {

   const [isDisplay, setDisplay] = useState<string>('none');

   const handleDisplay = (flag: boolean) => {
      flag? setDisplay('block') : setDisplay('none');
   }

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            onToggle={handleDisplay}/>
         </div>
         
         <div id="myLinks" style={{display: `${isDisplay}`}}>
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
