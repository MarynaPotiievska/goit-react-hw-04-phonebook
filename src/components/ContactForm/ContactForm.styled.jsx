import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 12px;
  border: 2.5px solid #3b85c5;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  padding: 4px;
`;

export const ContactInput = styled(Field)`
  display: block;
  border: 0.5px solid #3b85c5;
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  padding: 2px 4px;
  border: 1px solid #3b85c5;
  border-radius: 4px;
  background-color: #3b85c5;
  color: #ffffff;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
`;
