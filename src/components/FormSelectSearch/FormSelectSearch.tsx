import React, { FC, useState } from 'react';
import SelectSearch, { SelectedOption, SelectedOptionValue } from 'react-select-search';
import 'react-select-search/style.css';
import './FormSelectSearch.css';
import { FormSelectSearchWrapper } from './FormSelectSearch.styled';

interface FormSelectSearchProps {}

const getSelection = (selectedValue: SelectedOptionValue | SelectedOptionValue[]): void => {
   console.log('selected value', selectedValue);
}

const FormSelectSearch: FC<FormSelectSearchProps> = () => {

   const [select, setSelect] = useState<string | null>('none');

   const handleSelect = (selectedValue: SelectedOptionValue | SelectedOptionValue[]): void => {
      setSelect(selectedValue?.toLocaleString());
   }


   const options = [
      {name: 'Swedish', value: 'sv'},
      {name: 'English', value: 'en'},
      {name: 'Ukraine', value: 'ua'},
      {name: 'Spanish', value: 'es'},
      {name: 'Italian', value: 'it'}
   ]

   return (
      <FormSelectSearchWrapper>
         FormSelectSearch Component
         <p>Selecte value <span style={{backgroundColor: 'red'}}>{select}</span></p>
         <SelectSearch options={options} onChange={handleSelect} placeholder='Choose your language'/>
      </FormSelectSearchWrapper>
     );  
}
export default FormSelectSearch;
