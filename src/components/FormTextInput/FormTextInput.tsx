import React, { FC, useState, ChangeEventHandler} from 'react';
import { FormTextInputWrapper } from './FormTextInput.styled';
// import { Box } from 'ink';
import TextInput from 'ink-text-input';
import { NumberFormatBase, PatternFormat, NumberFormatBaseProps } from 'react-number-format';

interface FormTextInputProps {}


const FormTextInput: FC<FormTextInputProps> = () => (
 <FormTextInputWrapper>
   <p>PatternFormat</p>
   <PatternFormat placeholder='enter' format='(#) (##)' patternChar='#' allowEmptyFormatting mask='_'/>
   <p>NumberFormatBase</p>
   <NumberFormatBase
        type="text"
        placeholder='enter'
        format={(value) =>
            value
                .replace(/\b[A-Z]{2}\d{4}[A-Z]{2}\b/i, '$1 ')
                .toLocaleUpperCase()
        }
      removeFormatting={(value) => value.replace(/\b[A-Z]{2}\d{4}[A-Z]{2}\b/i, '')}
      isValidInputCharacter={(char) => /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i.test(char)}
      //   getCaretBoundary={(value) =>
      //       Array(value.length + 1)
      //           .fill(0)
      //           .map((v) => true)
      //   }
        onKeyDown={(e) =>
            /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i && e.preventDefault()
        }
    />
 </FormTextInputWrapper>
);

export default FormTextInput;
