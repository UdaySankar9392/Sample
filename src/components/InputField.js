import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputField = ({ field, form, ...props }) => {
  return <StyledInput {...field} {...props} />;
};

export default InputField;
