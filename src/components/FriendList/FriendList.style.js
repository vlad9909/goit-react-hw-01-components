import styled from 'styled-components';

export const Item = styled.li`
  min-width: 300px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 8px 2px
    ${props => {
      return props.isActive ? 'rgba(96, 214, 6, 0.3)' : 'rgba(214, 19, 6, 0.3)';
    }};
  border: solid 3px
    ${props => {
      return props.isActive ? 'green' : 'red';
    }};
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  -left: 5px;
  background: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  border: 3px solid black;
  border-radius: 5px;
  padding: 4px;
  margin-right: 15px;
`;
