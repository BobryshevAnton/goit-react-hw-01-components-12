import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <section>
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </ul>
    </section>
  );
}
