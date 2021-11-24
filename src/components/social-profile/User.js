import PropTypes from 'prop-types';
import css from './User.module.css';

const User = ({ name, tag, location, ava, followers, views, likes }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={ava} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  ava: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // stats: PropTypes.shape({
  //   followers: PropTypes.number.isRequired,
  //   views: PropTypes.number.isRequired,
  //   likes: PropTypes.number.isRequired,
  // }).isRequired,
};

export default User;
