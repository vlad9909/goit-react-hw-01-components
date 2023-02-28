import PropTypes from 'prop-types';
import {
  ProfileBox,
  Image,
  Direction,
  Name,
  UserInfo,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.style';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <ProfileBox>
      <Direction>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Direction>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </List>
    </ProfileBox>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
