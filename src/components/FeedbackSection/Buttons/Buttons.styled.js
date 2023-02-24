import styled from 'styled-components';

export const Button = styled.button`
  :not(:last-child) {
    margin-right: 10px;
  }
  padding: 5px 10px;
  border-radius: 10px;
  background-color: black;
  color: white;
  :hover {
    background-color: white;
    color: black;
  }
`;
