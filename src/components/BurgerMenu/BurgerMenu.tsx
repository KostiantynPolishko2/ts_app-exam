import React, { FC, useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link, Routes, Route } from 'react-router-dom';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import Section from '../Section/Section';
import { SearcSelect } from './BurgerMenu.styled';

interface BurgerMenuProps {}

const handleDisplay = (flag: boolean):string => (
   flag? 'block' : 'none'
);

const BurgerMenu: FC<BurgerMenuProps> = (): React.FunctionComponentElement<BurgerMenuProps> => {
   
   const [isOpen, setOpen] = useState<boolean>(false);

   return (
      <>
         <BurgerMenuWrapper className='topnav'>
            <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
               <Hamburger color='whitesmoke' background-color='grey' rounded
               toggled={isOpen} toggle={setOpen}/>
            </div>
            
            <div id="myLinks" style={{display: `${handleDisplay(isOpen)}`}}>
                  <SearcSelect>Search by:</SearcSelect>
                  <Link to={'/number'}>Number</Link>
                  <Link to={'/vincode'}>VinCode</Link>
            </div>
            <Link to={'/compare'} className="active">Compare</Link>
         </BurgerMenuWrapper>
         <Section number='/number' vincode='/vincode' compare='/compare'/>
      </>
     );
}

export default BurgerMenu;
