import styled from 'styled-components';
import { getRandomHexColor } from './getRandomColor';
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  border: 3px solid green;
  background: green;

  border-radius: 20px;
  width: 600px;
  margin: 30px 0px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 20px;
`;

export const Label = styled.span`
  padding: 5px;
  color: #4a795c;
  font-size: 30px;
  background: white;
  border-radius: 40%;
`;

export const Percentage = styled.span`
  font-weight: 600;
  font-size: 50px;
  margin-top: 10px;
`;
