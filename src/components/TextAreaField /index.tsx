import React, { TextareaHTMLAttributes } from 'react';

import { Textareablock } from './styles';

interface ITextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  labelText: string;
}

const TextareaField: React.FC<ITextareaFieldProps> = ({
  name,
  labelText,
  ...rest
}) => {
  return (
    <Textareablock>
      <label htmlFor={name}>{labelText}</label>
      <textarea id={name} {...rest} />
    </Textareablock>
  );
};

export default TextareaField;
