import React, { FC, useState, createContext} from 'react';
import { MainPageWrapper } from './MainPage.styled';
import { BrowserRouter } from 'react-router-dom';
import FormSearch from '../FormSearch/FormSearch';
import Header from '../Header/Header';
import Section from '../Section/Section';

interface MainPageProps {}

type FormData = {
   labelTxt: string,
   placeholderTxt: string,
}

export const FormDataContext = createContext((formData: FormData):void=>{});

const MainPage: FC<MainPageProps> = (): React.FunctionComponentElement<MainPageProps> => {

   const [isDisplay, setDisplay] = useState<string>('none');
   const handleDisplay = (flag: boolean): void => {
      flag? setDisplay('block') : setDisplay('none');
   }

   const [formData, setLabel] = useState<FormData>({labelTxt: '', placeholderTxt: ''});
   const handleFormData = (formData: FormData): void => {
      setLabel(formData);
   }

   return (
      <BrowserRouter>
         <FormDataContext.Provider value={handleFormData}>
            <Header 
               _isDisplay={isDisplay} _handleDisplay={handleDisplay}
            />
            <FormSearch labelTxt={formData.labelTxt} placeholderTxt={formData.placeholderTxt} displayForm={isDisplay}/>
            <Section number='/number' vincode='/vincode' compare='/compare'
               _isDisplay={isDisplay}
            />
         </FormDataContext.Provider>
      </BrowserRouter>
   );
}

export default MainPage;
