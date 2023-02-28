import styled from 'styled-components';

export const TableTr = styled.tr`
  border: 1px solid #777;
  padding: 0.5rem;
  text-align: center;
  background: ${props => {
    switch (props.value) {
      case 'invoice':
        return '#C3FF8E';
      case 'payment':
        return '#FFF08E';
      case 'withdrawal':
        return '#FFA08E';
      case 'deposit':
        return '#8EC6FF';
      default:
        return 'red';
    }
  }};
`;

export const TableTd = styled.td`
  border: 1px solid #777;
  padding: 0.5rem;
  text-align: center;
`;
