import './Statistics.css';

export default function StatisticList({ label, percentage }) {
  return (
    <li className="item">
      <span class="labelItem">{label}</span>
      <span class="percentageItem">{percentage} %</span>
    </li>
  );
}
