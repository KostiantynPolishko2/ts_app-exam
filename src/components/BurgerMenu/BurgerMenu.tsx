import React, { FC, useState, useContext } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import { ILinks } from '../Section/Section';
import { FormDataContext } from '../MainPage/MainPage';

interface BurgerMenuProps extends ILinks {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
}

const BurgerMenu: FC<BurgerMenuProps> = (props): React.FunctionComponentElement<BurgerMenuProps> => {

   const handleFormData = useContext(FormDataContext);

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            onToggle={props._handleDisplay}/>
         </div>
         
         <div id="myLinks" style={{display: `${props._isDisplay}`}}>
               <Link onClick={e => handleFormData({labelTxt: 'номеру', placeholderTxt: 'Номерной знак'})} to={props.number}>Number</Link>
               <Link onClick={e => handleFormData({labelTxt: 'VIN', placeholderTxt: 'VIN code'})} to={props.vincode}>VinCode</Link>
         </div>
         <Link to={props.compare} className="compare">Compare</Link>
      </BurgerMenuWrapper>
     );
}

export default BurgerMenu;
