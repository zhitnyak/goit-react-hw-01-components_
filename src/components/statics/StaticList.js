import PropTipes from 'prop-types';
import css from '../statics/static.css';

const StaticList = ({ title, stats }) => {
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
  title: PropTipes.string.isRequired,
  stats: PropTipes.arrayOf(
    PropTipes.shape({
      label: PropTipes.string.isRequired,
      percentage: PropTipes.number.isRequired,
    }),
  ).isRequired,
};

export default StaticList;
