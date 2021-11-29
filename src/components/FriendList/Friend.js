import PropTypes from 'prop-types';
import css from './Friend.module.css';

const Friend = ({ isOnline, avatar, name }) => {
  console.log(isOnline);
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  //   isOnline: PropTypes.oneOf(['true', 'false']).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
