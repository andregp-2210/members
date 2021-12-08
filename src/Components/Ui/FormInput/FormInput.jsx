/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { InputContainer, InputLabel, Input, InputError } from './styles';

const FormInput = ({
  label = '',
  placeholder = '',
  className = '',
  type = '',
  disabled = false,
  defaultValue = null,
  name = '',
  register = () => {},
  errorMessage = null,
}) => (
  <InputContainer className={className}>
    <InputLabel>{label}</InputLabel>
    <Input
      name={name}
      disabled={disabled}
      placeholder={placeholder || label}
      defaultValue={defaultValue}
      type={type}
      {...register}
    />
    {errorMessage && <InputError>{errorMessage}</InputError>}
  </InputContainer>
);

export default FormInput;
