import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isonline }) {
  return <>
    <span className={`${styles.status} ${isonline && styles.online}`}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{ name}</p>
  </>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isonline: PropTypes.bool.isRequired,
}

export default FriendListItem;
