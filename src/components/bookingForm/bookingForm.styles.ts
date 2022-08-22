import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: grey;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid #000;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background: #f16b50;
  color: #fff;
  font-size: 16px;
  border: none;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;
