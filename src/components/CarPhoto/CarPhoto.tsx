import React, { FC } from 'react';
import { CarPhotoWrapper } from './CarPhoto.styled';

interface CarPhotoProps {}

const CarPhoto: FC<CarPhotoProps> = () => (
 <CarPhotoWrapper>
    CarPhoto Component
 </CarPhotoWrapper>
);

export default CarPhoto;
