import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { CompareMarkModelWrapper } from './CompareMarkModel.styled';
import { DataMarkModel } from './DataMarkModel';
import { ErrorMarkModel } from './ErrorMarkModel';


interface CompareProps {
   modelMark: string,
};

interface ICatalogModel {
   photo_url: string,
   price_avg: number,
   price_max: number,
   price_min: number,
   year_from: number,
};

interface IModelMark {
   catalog_model: ICatalogModel,
   full_title: string,
   id: number,
};

interface IError {
   status: number
   code: string,
   name: string,
   photo_url: string,
};

const CompareMarkModel: FC<CompareProps> = ({modelMark}): React.FunctionComponentElement<HTMLElement> => {

   const [dataModelMark, setDataModelMark] = useState<IModelMark | null>(null);
   const [errorModelMark, setErrorModelMark] = useState<IError | null>(null);
   const [isData, setIsData] = useState<boolean>(false);

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
         setDataModelMark(responce.data);
         setIsData(true);
      }
      catch (error){
         setErrorModelMark({status: 404, code: 'ERR_BAD_REQUEST', name: 'AxiosError', photo_url: './img/error404.jpg'});
         setIsData(false);
      }
   }

   useEffect(() => {fetchDataModelMark(modelMark);}, [modelMark]);

   return (
      <CompareMarkModelWrapper onLoad={() => {fetchDataModelMark(modelMark)}}>
         {isData? <DataMarkModel _dataMarkModel={dataModelMark}/> : <ErrorMarkModel _error={errorModelMark}/>}         
      </CompareMarkModelWrapper>
     );
}

export default CompareMarkModel;
