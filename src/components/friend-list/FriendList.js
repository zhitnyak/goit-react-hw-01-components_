import PropTypes from 'prop-types';
import Friend from './Friend';
import css from './Friend.module.css';

const FriendList = friends => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, status, avatar, name }) => (
        <Friend key={id} status={status} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.shape({
    status: PropTypes.oneOf(['true', 'false']).isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default FriendList;
