import React, { FC, ReactElement, useEffect, useState } from 'react';
import 'the-new-css-reset';
import axios from 'axios';
import * as card from './CarPhoto.styled';
import * as plate from './CardPhotoPlate.styled';
import { CarError, CarData } from './FormIClass';
import IconCompare from '../IconCompare/IconCompare';

const key = '349a1acb991de77d8d42744d27b6f379';

interface IdPhotoProps {
   _id: number | string,
}

interface SizePhotoProps {
   _width_photo?: number,
   _height_photo?: number,
}

interface ErrorProps {
   _error: CarError,
}

export interface CarPhotoProps extends SizePhotoProps, IdPhotoProps, ErrorProps {
   _car: CarData,
}

const getUrlPhoto = (status: number):string => {
   
   if (status === 404){
      return './img/error404.jpg';
   }

   return './img/car_icon.jpg';
}

const CarPhoto: FC<CarPhotoProps> = (props): React.FunctionComponentElement<CarPhotoProps>=> {

   const getError = (flag: boolean):ReactElement<HTMLElement> => {
      if(flag){
         return <plate.DataError><p>{props._error.description}</p></plate.DataError>;
      }
      return <></>
   }

   const clickFetchPhotoUrls = async(markModel: string): Promise<string> => {

      const client = axios.create({
         baseURL: 'https://baza-gai.com.ua/make/',
         headers: {'Accept': 'application/json', 'X-Api-Key': key},
         method: 'get',
         responseType: 'json',
      });
   
      try{
         const responce = await client.get(markModel);
         return responce.data['catalog_model']['photo_url'];
      }
      catch{
         return '';
      }
   }
   
   function hanleCarPhoto(): (e: React.FormEvent<HTMLElement>)=>void {
      
      let isUrl = false;

      return async function (e: React.FormEvent<HTMLElement>) {
         if(!isUrl){
            const [model, mark]: Array<string> = e.currentTarget.querySelector('span.model')?.textContent?.toLowerCase().split(' ') || ['none', 'none'];
            (e.currentTarget.querySelector('img') as HTMLImageElement).src = await clickFetchPhotoUrls(`${model}/${mark}`) || require('./img/error404.jpg');
            isUrl = true;
         }
      }
   }

   const getUrlCarPhoto = hanleCarPhoto();

   return (
      <card.CarPhotoWrapper onClick={getUrlCarPhoto} _width={props._width_photo} _height={props._height_photo} _border='main'>
         <card.CarPhotoImg src={props._car.photo_url != ''? require(`${props._car.photo_url}`) : require(`${getUrlPhoto(props._error.status)}`)}/>
         <card.CarPhotoInner _direction='column'>
            <card.ContentTop>
               <div>
                  <plate.Number style={{float: 'left'}}>
                     <plate.NumberFlag _direction='column' _justify='space-around'>
                        <plate.FlagIcon>
                           <div></div>
                           <div></div>
                        </plate.FlagIcon>
                        <plate.FlagCode>
                           <span>UA</span>
                        </plate.FlagCode>
                     </plate.NumberFlag>
                     <plate.NumberText>
                        <span className='digits'>{props._car.digits || 'AA DDDD AA'}</span>
                     </plate.NumberText>
                  </plate.Number>
                  <IconCompare iconame='fa-heart'/>
               </div>
               <plate.DateRegistr>
                  <span className='registered_at'>{props._car.registered_at || 'dd.mm.yyyy'}</span>
               </plate.DateRegistr>
            </card.ContentTop>
                  {getError(props._error.flag)}
            <card.ContentBottom _direction='column' _justify='end' _align='start'>
               <plate.DataMark>
                  <span className='model_year'>{props._car.model_year || 'x-yyyy'}</span>
               </plate.DataMark>
               <plate.DataMark>
                  <span className='model'>{props._car.model || 'x-model'}</span>
               </plate.DataMark>
            </card.ContentBottom>
         </card.CarPhotoInner>
      </card.CarPhotoWrapper>
     );
}


const carIcon = './img/car_icon.jpg';

CarPhoto.defaultProps  = {
   _id: 'main',
   _width_photo: 500,
   _height_photo: 375,
}

export default CarPhoto;
