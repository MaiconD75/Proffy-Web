import React, { InputHTMLAttributes } from 'react';

import { Inputblock } from './styles';

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
}

const InputField: React.FC<IInputFieldProps> = ({
  name,
  labelText,
  ...rest
}) => {
  return (
    <Inputblock>
      <label htmlFor={name}>{labelText}</label>
      <input type="text" id={name} {...rest} />
    </Inputblock>
  );
};

export default InputField;
