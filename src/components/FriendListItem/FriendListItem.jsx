import './FriendListItem.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="friendItem">
      <span className={isOnline ? 'status' : 'statusOn'}>
        {isOnline ? 'Off-Line' : 'On-Line'}
      </span>
      <img className="friend-avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
