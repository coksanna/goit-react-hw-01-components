import FriendListItem from './FriendListItem';
import css from './friendList.module.css';

function FriendList ({friends}) {
    const element = friends.map(friend => <FriendListItem key = {friend.id} {...friend} />);
    return (
        <ul className={css.friendList}>
            {element}
        </ul>
    )
}

export default FriendList;