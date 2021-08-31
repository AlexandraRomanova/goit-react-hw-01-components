import PropTypes from 'prop-types';
import defaultImage from '../defaultImage.svg'

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className="item">
            {/* Здесь должен быть isOnline, который если true меняет цвет */}
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
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