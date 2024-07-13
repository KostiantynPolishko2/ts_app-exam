import React, { FC, useContext, useState } from 'react';
import Hamburger from 'hamburger-react';
import IconCompare from '../IconCompare/IconCompare';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import { ILinks } from '../Section/Section';
import { FormDataContext, FormDisplayContext} from '../MainPage/MainPage';

interface BurgerMenuProps extends ILinks {
   _isDisplay: string,
   _handleDisplay: (flag: boolean) => void,
}

interface ICatalogModel {
   photo_url: string,
   price_avg: number,
   price_max: number,
   price_min: number,
   year_from: number,
}

interface IModelMark {
   // catalog_model: ICatalogModel,
   full_tittle: string,
   // id: number,
}

interface IErrorReponce {
   status: number,
   photo_url: string,
}

interface IErrorData {
   code: string,
   // response: IErrorReponce,
}

const BurgerMenu: FC<BurgerMenuProps> = (props): React.FunctionComponentElement<BurgerMenuProps> => {
 
   const handleFormData = useContext(FormDataContext);
   const handleIsCompare = useContext(FormDisplayContext);

   const [dataModelMark, setDataModelMark] = useState<IModelMark | null>(null);
   const [errorModelMark, setErrorModelMark] = useState<IErrorData | null>(null);

   const fetchDataModelMark = async (modelMark: string): Promise<IModelMark | null> => {
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
         // setDataModelMark(responce.data);
         return responce.data['full_tittle'];
      }
      catch (error){
         // setErrorModelMark({code: 'ERR_BAD_REQUEST', response: {status: 404, photo_url: './img/error404.jpg'}});
         return null;
      }
   }

   const HandleCompare = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
      const modelMarks: Array<string> = [];
      e.currentTarget.parentElement?.parentElement?.nextElementSibling?.querySelectorAll('span.modelMark')
      .forEach(item => {modelMarks.push(item.textContent?.toLowerCase() || '')})
      
      if(modelMarks[0]) {
         let item: IModelMark | null = await fetchDataModelMark(modelMarks[0]);
         setDataModelMark(await fetchDataModelMark(modelMarks[0]));
      };
   };

   console.log(dataModelMark);

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            onToggle={props._handleDisplay}/>
         </div>
         {/* <p>Menu:</p> */}
         <p style={{color: 'red'}}>{dataModelMark?.full_tittle || 'none dates'}</p>
         <div id="myLinks" style={{display: `${props._isDisplay}`}}>
               <Link onClick={e => handleFormData({labelTxt: 'номеру', placeholderTxt: 'Номерной знак'})} to={props.number}>Number</Link>
               <Link onClick={e => handleFormData({labelTxt: 'VIN', placeholderTxt: 'VIN code'})} to={props.vincode}>VinCode</Link>
         </div>
         <Link onClick={(e) => {HandleCompare(e); handleIsCompare(true); }} to={props.compare} className="compare">
            <IconCompare iconame='fa-scale-balanced'/>
         </Link>       
      </BurgerMenuWrapper>
     );
}

export default BurgerMenu;
