import { Item, Status, Avatar } from './FriendList.style';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id} isActive={isOnline}>
            <Status isActive={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" height={70} width={70} />
            <p>{name}</p>
          </Item>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
