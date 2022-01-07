import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title='', stats}) => {
    return <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.list}>
            {stats.map(stat => (
                <li key={stat.id} className={styles.item} style={{backgroundColor: `rgb(${randomColor()} ${randomColor()} ${randomColor()})`}}>
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
};

function randomColor() {
    return Math.floor(Math.random() * 255);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;


