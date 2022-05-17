import style from './Profile.module.scss'
import PropTypes from "prop-types";

const Profile = ({image:dasBild, username, tag, location ,followers, views, likes}) => {
    return (
        <div className={style.card}>
<img src={dasBild} alt="something" className={style["card__image"]}/>
<h2 className={style["card__name"]}>{username}</h2>
<p className={style["card__tag"]}>@{tag}</p>
<p className={style["card__location"]}>{location}</p>
<div className={style["card__foot-flex"]}>
    <div className={style["card__info-block"]}>
        <p className={style["card__info"]}>Followers</p>
        <p className={style["card__number"]}>{followers}</p>
    </div>
    <div className={style["card__info-block"]}>
    <p className={style["card__info"]}>Views</p>
        <p className={style["card__number"]}>{views}</p>
    </div>
    <div className={style["card__info-block"]}>
    <p className={style["card__info"]}>Likes</p>
        <p className={style["card__number"]}>{likes}</p>
    </div>
</div>
        </div>
    )
};
Profile.defaultProps = {
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
}
Profile.propTypes = {
    image: PropTypes.string, 
    username : PropTypes.string.isRequired,
   tag:PropTypes.string, 
   location: PropTypes.string,
   followers: PropTypes.number,
 views:PropTypes.number,
  likes: PropTypes.number
}


export default Profile;