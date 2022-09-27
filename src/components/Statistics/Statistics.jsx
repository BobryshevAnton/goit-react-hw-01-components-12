import StatisticList from './StatisticList';
import './Statistics.css';

export default function Statistic({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticList key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}
