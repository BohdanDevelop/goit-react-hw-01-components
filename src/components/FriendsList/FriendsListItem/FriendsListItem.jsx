import style from './FriendsListItem.module.scss';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const online = [style.status];
  if (isOnline) online.push(style.online);

  return (
    <li className={style.li}>
      <span className={online.join(' ')}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

export default FriendsListItem;
