import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return <section className="statistics">
        {title && <h2>{title}</h2>}

        <ul className="stat-list">
            {stats.map(stat => (
                <li key={stat.id} className="item">
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
};

Statistics.defaultProps = {
    title: '',
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;


