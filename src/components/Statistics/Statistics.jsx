import PropTypes from 'prop-types';
import styles from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
        <div className={styles.statistics}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p>
                        Good: <span className={styles.value}>{good}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Neutral: <span className={styles.value}>{neutral}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Bad: <span className={styles.value}>{bad}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Total: <span className={styles.value}>{total}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Positive feedback: <span className={styles.value}>{percent}%</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
}

export default Statistics;