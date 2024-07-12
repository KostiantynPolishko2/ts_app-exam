import React, { FC } from 'react';
import { IconCompareWrapper } from './IconCompare.styled';
import 'the-new-css-reset';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface IconCompareProps {}

const IconCompare: FC<IconCompareProps> = () => (
 <IconCompareWrapper>
         <i className='fas fa-heart'></i>
 </IconCompareWrapper>
);

export default IconCompare;
