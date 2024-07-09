import React, { FC, useState } from 'react';
import { MainPageWrapper } from './MainPage.styled';
import { BrowserRouter } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Header from '../Header/Header';
import Section from '../Section/Section';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = (): React.FunctionComponentElement<MainPageProps> => {

   const [isDisplay, setDisplay] = useState<string>('none');
   const handleDisplay = (flag: boolean): void => {
      flag? setDisplay('block') : setDisplay('none');
   }

   return (
      <BrowserRouter>
         <Header 
            _isDisplay={isDisplay} _handleDisplay={handleDisplay}
         />
         <Section number='/number' vincode='/vincode' compare='/compare'
            _isDisplay={isDisplay}
         />
      </BrowserRouter>
   );
}

export default MainPage;
