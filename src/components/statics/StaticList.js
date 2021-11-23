import PropTypes from 'prop-types';
import css from '../statics/static.css';
const StaticList = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {stats.map(statItem => (
          <li className={css.statItem} key={statItem.id}>
            <span className={css.label}>{statItem.label}</span>
            <span className={css.percentage}>{statItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
StaticList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StaticList;
