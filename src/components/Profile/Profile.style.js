import styled from 'styled-components';
export const ProfileBox = styled.div`
  background: #7da659;
  border-radius: 25px;
  width: 600px;
  box-shadow: 20px 20px 8px 5px rgba(96, 214, 6, 0.7);
`;

export const Direction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  border: 7px solid greenyellow;
  border-radius: 40%;
  margin-top: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const UserInfo = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #656565;
  margin-top: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 200px; */
`;

export const Label = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #4a795c;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 50px;
`;
