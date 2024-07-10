import React, { FC } from 'react';
import { FormSearchWrapper } from './FormSearch.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormSearch.css';
import { getDigits, handleInput } from './FormFunction';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

interface FormSearchProps {
   labelTxt?: string,
   placeholderTxt?: string,
   displayForm?: string,
}

const FormSearch: FC<FormSearchProps> = (props): React.FunctionComponentElement<FormSearchProps> => (
 <FormSearchWrapper _display={props.displayForm}>
    <Form>
      <Form.Group controlId='search_auto'>
         <Form.Label className='form'>Поиск авто по {props.labelTxt || 'номеру'}</Form.Label>
         <Stack direction='horizontal' gap={0}>
            <Form.Control type='text' placeholder={props.placeholderTxt || 'Номерной знак'} className='form'
            onKeyDown={handleInput}/>
            <Button name='search' type='button' form='search_auto' variant='primary' className='form'
            onClick={getDigits}>Поиск</Button>
         </Stack>
      </Form.Group>
    </Form>
 </FormSearchWrapper>
);

export default FormSearch;
