import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomHexColor } from '../randomColor';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statsSection}>
      {title ?
        (<h2 className={styles.statsTitle}>{title}</h2>)
        : undefined}
      <ul className={styles.statsList}>
        {stats.map(({ id, percentage, label }) => (
          <li className={styles.statsItem} key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styles.statsLabel}>{label}</span>
            <span className={styles.statsPercentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}

export default Statistics;
