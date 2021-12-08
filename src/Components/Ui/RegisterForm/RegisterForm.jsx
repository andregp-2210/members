/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../FormInput';

import { messages } from '../../../Utils/ErrorMessages';
import { Form, ButtonsContainer } from './styles';
import { AppContext } from '../../../Context';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });
  const { addMember } = useContext(AppContext);

  const intialValues = {
    firstName: '',
    lastName: '',
    address: '',
    ssn: '',
  };
  const onSubmit = (data) => {
    addMember({ member: data });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='First Name'
        type='text'
        register={register('firstName', {
          required: messages[0],
        })}
        defaultValue={intialValues.firstName}
        errorMessage={errors.firstName?.message}
      />
      <FormInput
        label='Last Name'
        type='text'
        register={register('lastName', {
          required: messages[0],
        })}
        defaultValue={intialValues.lastName}
        errorMessage={errors.lastName?.message}
      />
      <FormInput
        label='Address'
        type='text'
        register={register('address', {
          required: messages[0],
        })}
        defaultValue={intialValues.address}
        errorMessage={errors.address?.message}
      />
      <FormInput
        label='SSN'
        placeholder='###-##-####'
        type='text'
        register={register('ssn', {
          required: messages[0],
          validate: (value) => {
            return (
              /^\d{3}-?\d{2}-?\d{4}$/.test(value) ||
              'El ssn ingresado no cumple con el formato requerido ###-##-####'
            );
          },
        })}
        defaultValue={intialValues.ssn}
        errorMessage={errors.ssn?.message}
      />
      <ButtonsContainer>
        <button type='reset' className='danger'>
          Reset
        </button>
        <button type='submit' className='primary'>
          Save
        </button>
      </ButtonsContainer>
    </Form>
  );
};

export default RegisterForm;
