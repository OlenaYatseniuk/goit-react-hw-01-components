import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={styles.friendListItem}>
            <FriendListItem avatar={avatar} name={name} isonline={isOnline} />
          </li>
        )
      }) }
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
