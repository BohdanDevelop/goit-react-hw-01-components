import PropTypes from "prop-types";
import style from './FriendList.module.scss';

const FriendsList = ({friends})=>{
    const liItems = friends.map(({avatar, id, name, isOnline}) => {
        const online = [style.status];
        if(isOnline) online.push(style.online)
        
        return <li className={style.li} key={id}>
        <span className={online.join(" ")} ></span>
  <img  src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
        </li>
    })
    
    return (
    <>
    <h2>Friends List</h2>
    <ul className={style.ul}>
{liItems}
    </ul>
    </>)
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))

}
export default FriendsList;