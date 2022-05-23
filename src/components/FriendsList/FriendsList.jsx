import PropTypes from 'prop-types';
import style from './FriendList.module.scss';
import FriendsListItem from './FriendsListItem';
const FriendsList = ({ friends }) => {
  const listItems = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendsListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    );
  });
  return (
    <>
      <h2>Friends List</h2>
      <ul className={style.ul}>{listItems}</ul>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendsList;
