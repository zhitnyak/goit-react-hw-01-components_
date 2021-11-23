import PropTipes from 'prop-types';
import css from './user.css';

const User = ({ name, tag, location, ava, followers, views, likes }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={ava} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  ava: PropTipes.string.isRequired,
  name: PropTipes.string.isRequired,
  tag: PropTipes.string.isRequired,
  location: PropTipes.string.isRequired,
  stats: PropTipes.shape({
    followers: PropTipes.number.isRequired,
    views: PropTipes.number.isRequired,
    likes: PropTipes.number.isRequired,
  }).isRequired,
};

export default User;
