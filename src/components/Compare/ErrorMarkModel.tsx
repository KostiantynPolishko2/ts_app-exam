import React, { FC } from "react";
import { ErrorMarkModelWrapper, DisplayCenter } from "./Compare.styled";

interface IError {
    status: number
    code: string,
    name: string
 };

interface ErrorMarkModelProps {
    _error: IError | null,
};

export const ErrorMarkModel: FC<ErrorMarkModelProps> = (props): React.FunctionComponentElement<HTMLElement> => {

    return(
        <ErrorMarkModelWrapper>
            <DisplayCenter>
                <p>{props._error?.name}</p>
                <p>{props._error?.code}&nbsp;{props._error?.status}</p>
            </DisplayCenter>
        </ErrorMarkModelWrapper>
    )
}