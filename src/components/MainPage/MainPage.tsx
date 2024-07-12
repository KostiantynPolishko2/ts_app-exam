import React, { FC, useState, createContext, useEffect } from 'react';
import { MainPageWrapper } from './MainPage.styled';
import { BrowserRouter } from 'react-router-dom';
import FormSearch from '../FormSearch/FormSearch';
import Header from '../Header/Header';
import Section from '../Section/Section';
import { handleIcon, handleSwitchOnIconHeart } from '../IconCompare/IconCompare';

interface MainPageProps {}

type FormData = {
   labelTxt: string,
   placeholderTxt: string,
}

export const FormDataContext = createContext((formData: FormData):void=>{});
export const FormDisplayContext = createContext((flag: boolean):void=>{});
export const SectionTopContext = createContext<number>(0);
export const CarNumberContext = createContext<string>('');
export const CarsModelContext = createContext((e: React.FormEvent<HTMLElement>):void=>{});

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
      setNumberCar('none');
   }

   const [isCompare, setIsCompare] = useState<boolean>(false);
   const handleIsCompare = (flag: boolean):void => {
      setIsCompare(flag);
   }

   const [carNumber, setNumberCar] = useState<string>('none');
   const handleCarNumber = (carNumber: string): void => {
      setNumberCar(carNumber);
   }

   const [modelMark, setModel] = useState<string>('');
   const handleModel = (e: React.FormEvent<HTMLElement>):void => {
      handleIcon(e);
      if(modelMarks.length === 2){
         handleSwitchOnIconHeart(e, modelMarks);
      }
      setModel(e.currentTarget.parentElement?.parentElement?.nextElementSibling?.querySelector('span.model')?.textContent?.toLowerCase() || '');
   }

   const [modelMarks, setModelMarks] = useState<Array<string>>([]);
   useEffect(() => {
      if(!modelMarks[0]){
         setModelMarks(modelMarks => {return modelMarks = [modelMark]});
      }
      else{
         if(modelMarks.length != 2){
            setModelMarks(items => { return [...items, modelMark]});
         }
         else{
            modelMarks[0] = modelMarks[1];
            modelMarks[1] = modelMark;
            setModelMarks(modelMarks);
         }
      }

      // console.log(modelMarks);
   }, [modelMark]);

   return (
      <BrowserRouter>
         <FormDataContext.Provider value={handleFormData}>
         <FormDisplayContext.Provider value={handleIsCompare}>
            <Header 
               _isDisplay={isDisplay} _handleDisplay={handleDisplay}
               _carsModel={modelMarks}
            />
         </FormDisplayContext.Provider>          
         </FormDataContext.Provider>
            <FormSearch 
               labelTxt={formData.labelTxt} 
               placeholderTxt={formData.placeholderTxt} 
               displayForm={isCompare? 'none': isDisplay}
               _handleCarNumber={handleCarNumber}
               />
         <SectionTopContext.Provider value={isCompare? 0 : 30}>
         <CarNumberContext.Provider value={carNumber}>
         <CarsModelContext.Provider value={handleModel}>
            <Section number='/number' vincode='/vincode' compare='/compare' _isDisplay={isDisplay}/>
         </CarsModelContext.Provider>
         </CarNumberContext.Provider>
         </SectionTopContext.Provider>
      </BrowserRouter>
   );
}

export default MainPage;
