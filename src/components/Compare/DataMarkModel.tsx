import React, { FC } from "react";
import { DataMarkModelWrapper } from "./CompareMarkModel.styled";

interface CatalogModelProps {
    photo_url: string,
    price_avg: number,
    price_max: number,
    price_min: number,
    year_from: number,
 }
 

interface MarkModelProps {
    catalog_model: CatalogModelProps,
    full_title: string,
    id: number,
}

interface DataMarkModelProps {
    _dataMarkModel: MarkModelProps | null,
}

export const DataMarkModel: FC<DataMarkModelProps> = (props): React.FunctionComponentElement<HTMLElement> => {
    return (
        <DataMarkModelWrapper id={`${props._dataMarkModel?.id}`} _imgPath={`${props._dataMarkModel?.catalog_model.photo_url}`}>
            <p style={{position: 'initial'}}>Tittle:<span>{props._dataMarkModel?.full_title}</span></p>
            <p>Price AVG:<span>{props._dataMarkModel?.catalog_model.price_avg} UAH</span></p>
            <p>Price max:<span>{props._dataMarkModel?.catalog_model.price_max} UAH</span></p>
            <p>Price min:<span>{props._dataMarkModel?.catalog_model.price_min} UAH</span></p>
            <p>Year produced:<span>{props._dataMarkModel?.catalog_model.year_from}</span></p>
        </DataMarkModelWrapper>
    )
}