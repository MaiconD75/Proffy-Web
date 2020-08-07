import React, { SelectHTMLAttributes } from 'react';

import { Selectblock } from './styles';

interface ISelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  labelText: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const SelectField: React.FC<ISelectFieldProps> = ({
  name,
  options,
  labelText,
  ...rest
}) => {
  return (
    <Selectblock>
      <label htmlFor={name}>{labelText}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Selectblock>
  );
};

export default SelectField;
