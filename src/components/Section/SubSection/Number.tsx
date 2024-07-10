import React, { FC, useState, useEffect, ReactNode } from 'react';
import CarPhoto from '../../CarPhoto/CarPhoto';
import axios from 'axios';
import { ICar, ICarOperations, CarData, CarError } from '../../CarPhoto/FormIClass';
import { NumberWrapper, SecondRaw } from './Number.styled';
import { CarPhotoProps } from '../../CarPhoto/CarPhoto';

interface NumberProps {
   carNumber: string
}

const getFcCarPhoto = (index: number, car: CarData, error: CarError): React.FunctionComponentElement<CarPhotoProps> | ReactNode => {
   if (index > 0){
      return <CarPhoto _id={`second${index}`} _width_photo={400} _height_photo={300} _car={car} _error={error}/>
   } 
   return <></>
}

const Number: FC<NumberProps> = ({carNumber}): React.FunctionComponentElement<NumberProps> => {

   const [carsData, setCarData] = useState([new CarData()]);
   const [carError, setCarError] = useState(new CarError());
   
   const key = '00cbd51c5f962dfa3b445a42e63d0160';
   const client = axios.create({
       baseURL: 'https://baza-gai.com.ua/nomer/',
       headers: {'Accept': 'application/json', 'X-Api-Key': key},
       method: 'get',
       responseType: 'json',
   }) 

   useEffect(() => {
      if(carNumber !== 'none'){
         client.get(carNumber).
         then((response) => {
            
            console.log(response.data)

            let car: ICar = response.data;
            let operations: ICarOperations = response.data['operations'];

            let cars = [new CarData(car, operations[0])]
            for(let i = 1; i != operations.length; i++){
               cars.push(new CarData(car, operations[i]))
            }
            setCarData(cars);
            setCarError(new CarError());
         }).

         catch((error) => {
            // console.log(error);
            setCarError(new CarError(true, error));
            setCarData([new CarData()]);
         } )
      }
      else {
         setCarData([new CarData()]);
         setCarError(new CarError());
      }
   }, [carNumber])


   return (
      <NumberWrapper>
         <CarPhoto _id={'main'} _width_photo={500} _height_photo={400} _car={carsData[0]} _error={carError}/>
         <SecondRaw>           
            {carsData.map((item, index) => (getFcCarPhoto(index, item, carError)))}
         </SecondRaw>
      </NumberWrapper>
   );
}

export default Number;
