import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className="transaction-historyHead">
        <tr className="transaction-historyList">
          <th className="transaction-historyItem">Type</th>
          <th className="transaction-historyItem">Amount</th>
          <th className="transaction-historyItem">Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-historyBody">
        {items.map(({ id, type, amount, currency }) => (
          <tr className="transaction-historyList" key={id}>
            <td className="transaction-historyBodyList">{type}</td>
            <td className="transaction-historyBodyList">{amount}</td>
            <td className="transaction-historyBodyList">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
