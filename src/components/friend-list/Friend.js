import PropTypes from 'prop-types';
import css from './Friend.module.css';

const Friend = ({ status, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={css[status]}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
Friend.propTypes = {
  status: PropTypes.oneOf(['true', 'false']).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
