import PropTypes from "prop-types";
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

PropTypes.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}