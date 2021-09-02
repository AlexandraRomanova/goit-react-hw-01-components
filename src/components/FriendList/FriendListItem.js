import PropTypes from 'prop-types';
import defaultImage from '../defaultImage.svg'

import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className={styles.item
        }>
            {/* Здесь должен быть isOnline, который если true меняет цвет */}
            <span className={isOnline ? styles.online : styles.offline}/>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

FriendListItem.defaultProps = {
    avatar: defaultImage,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;