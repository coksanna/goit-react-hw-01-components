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