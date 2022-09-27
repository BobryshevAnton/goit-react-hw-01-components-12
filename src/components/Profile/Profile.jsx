// import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          className="descriptionImg"
          src={avatar}
          alt="User avatar"
          class="avatar"
        />
        <p className="name">{userName}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="statsList">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="statsList">
          <span className="label">Likes</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="statsList">
          <span className="label">Views</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// Profile.PropTypes = {
//   userName: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   // stats: PropTypes.string.isRequired,
// };
