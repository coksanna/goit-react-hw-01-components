import PropTypes from "prop-types";
import css from './friendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    const status = isOnline ? `${css.isOnline} ${css.active}` : css.isOnline;
    return (
        <li className= {css.item}>
            <span className ={status}
            ></span>
            <img className ={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className ={css.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired, 
}