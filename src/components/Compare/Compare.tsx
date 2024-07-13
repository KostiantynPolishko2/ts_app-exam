import React, { FC, useState } from 'react';
import axios from 'axios';
import { CompareWrapper } from './Compare.styled';

interface CompareProps {
   modelMark: string,
}

interface IModelMark {
   full_tittle: string,
}


const Compare: FC<CompareProps> = ({modelMark}) => {

   const [tittle, setTittle] = useState<string>();

   const fetchDataModelMark = async (modelMark: string): Promise<void> => {
      const key = '349a1acb991de77d8d42744d27b6f379';
   
      modelMark = modelMark.replace(' ', '/');
   
      const client = axios.create({
         baseURL: 'https://baza-gai.com.ua/make/',
         headers: {'Accept': 'application/json', 'X-Api-Key': key},
         method: 'get',
         responseType: 'json',
      });
   
      try{
         const responce = (await client.get(modelMark));
         console.log(responce.data['full_title']);
         setTittle(responce.data['full_title']);
      }
      catch (error){
         setTittle('');
      }
   }

   return (
      <CompareWrapper>
         <p>Compare</p>
         <p>Full tittle: {tittle}</p>
         <button type='button' onClick={() => {fetchDataModelMark(modelMark)}}>Compare </button>
      </CompareWrapper>
     );
}

export default Compare;
