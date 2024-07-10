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
export const FormDisplayContext = createContext((flag: boolean):void=>{});
export const SectionTopContext = createContext<number>(0);

const MainPage: FC<MainPageProps> = (): React.FunctionComponentElement<MainPageProps> => {

   const [isDisplay, setDisplay] = useState<string>('none');
   const handleDisplay = (flag: boolean): void => {
      flag? setDisplay('block') : setDisplay('none');
      setIsCompare(false);
   }

   const [formData, setLabel] = useState<FormData>({labelTxt: '', placeholderTxt: ''});
   const handleFormData = (formData: FormData): void => {
      setLabel(formData);
      setIsCompare(false);
   }

   const [isCompare, setIsCompare] = useState<boolean>(false);
   const handleIsCompare = (flag: boolean):void => {
      setIsCompare(flag);
   }

   return (
      <BrowserRouter>
         <FormDataContext.Provider value={handleFormData}>
         <FormDisplayContext.Provider value={handleIsCompare}>
            <Header 
               _isDisplay={isDisplay} _handleDisplay={handleDisplay}
            />
         </FormDisplayContext.Provider>          
         </FormDataContext.Provider>
            <FormSearch labelTxt={formData.labelTxt} placeholderTxt={formData.placeholderTxt} displayForm={isCompare? 'none': isDisplay}/>
         <SectionTopContext.Provider value={isCompare? 0 : 30}>
            <Section number='/number' vincode='/vincode' compare='/compare' _isDisplay={isDisplay}/>
         </SectionTopContext.Provider>
      </BrowserRouter>
   );
}

export default MainPage;
