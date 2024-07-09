import React, { FC, useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link, Routes, Route, BlockerFunction } from 'react-router-dom';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import { ILinks } from '../Section/Section';
import { SearcSelect } from './BurgerMenu.styled';

interface BurgerMenuProps extends ILinks {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
}

const BurgerMenu: FC<BurgerMenuProps> = (props): React.FunctionComponentElement<BurgerMenuProps> => {

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            onToggle={props._handleDisplay}/>
         </div>
         
         <div id="myLinks" style={{display: `${props._isDisplay}`}}>
               <SearcSelect>Search by:</SearcSelect>
               <Link to={props.number}>Number</Link>
               <Link to={props.vincode}>VinCode</Link>
         </div>
         <Link to={props.compare} className="active">Compare</Link>
      </BurgerMenuWrapper>
     );
}

export default BurgerMenu;
