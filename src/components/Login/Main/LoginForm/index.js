import React from 'react';
import {
  Form,
  FormInput,
  FormInputLabel,
  FormInputContainer,
  FormSubmit,
} from './styles';

const LoginForm = ({
  fields,
  handleInputChange,
  handleTouchChange,
  handleSubmit,
  values,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {fields.map(({ field, label, type, key }) => {
        const { touched } = values[field];
        return (
          <FormInputContainer key={key}>
            <FormInput
              autocomplete="off"
              type={type}
              touched={touched}
              // onFocus={handleTouchChange(field)}
              onChange={handleInputChange(field)}
              placeholder={label}
            />
            {/* <FormInputLabel touched={touched}>{label}</FormInputLabel> */}
          </FormInputContainer>
        );
      })}
      <FormSubmit>Login</FormSubmit>
    </Form>
  );
};

export default LoginForm;
