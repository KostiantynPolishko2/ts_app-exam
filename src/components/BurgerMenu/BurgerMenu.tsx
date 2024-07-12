import React, { FC, useContext } from 'react';
import Hamburger from 'hamburger-react';
import IconCompare from '../IconCompare/IconCompare';
import { Link } from 'react-router-dom';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import { ILinks } from '../Section/Section';
import { FormDataContext, FormDisplayContext } from '../MainPage/MainPage';

interface BurgerMenuProps extends ILinks {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
}

const BurgerMenu: FC<BurgerMenuProps> = (props): React.FunctionComponentElement<BurgerMenuProps> => {

   const handleFormData = useContext(FormDataContext);
   const handleIsCompare = useContext(FormDisplayContext);

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            onToggle={props._handleDisplay}/>
         </div>
         <p>Menu:</p>
         <div id="myLinks" style={{display: `${props._isDisplay}`}}>
               <Link onClick={e => handleFormData({labelTxt: 'номеру', placeholderTxt: 'Номерной знак'})} to={props.number}>Number</Link>
               <Link onClick={e => handleFormData({labelTxt: 'VIN', placeholderTxt: 'VIN code'})} to={props.vincode}>VinCode</Link>
         </div>
         <Link onClick={e => {handleIsCompare(true)}} to={props.compare} className="compare">
            <IconCompare iconame='fa-scale-balanced'/>
         </Link>       
      </BurgerMenuWrapper>
     );
}

export default BurgerMenu;
