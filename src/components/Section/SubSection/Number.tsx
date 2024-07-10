import React, { FC, ReactElement } from 'react';
import CarPhoto from '../../CarPhoto/CarPhoto';
import { CarData, CarError } from '../../CarPhoto/FormIClass';
import { NumberWrapper, SecondRaw } from './Number.styled';

const Number: FC = (): ReactElement => {

   const car = <CarPhoto _id={'main'} _width_photo={450} _height_photo={400} _car={new CarData()} _error={new CarError()}/>;
   const cars = [car, car, car]

   return (
      <NumberWrapper>
         {cars[0]}
         <SecondRaw>
            {cars[1]}
            {cars[2]}
         </SecondRaw>
      </NumberWrapper>
   );
}

export default Number;
