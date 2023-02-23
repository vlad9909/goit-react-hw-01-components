export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li class="item">
            <span class="status"></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
