const transactions = [
  {
    description: 'Salary',
    amount: 45000,
    type: 'income',
  },
  {
    description: 'Groceries',
    amount: 6000,
    type: 'expense',
  },
  {
    description: 'Freelance Project',
    amount: 15000,
    type: 'income',
  },
  {
    description: 'Rent',
    amount: 12000,
    type: 'expense',
  },
];

function Transaction() {
  return (
    <div>

      <div>
        <h2>Transaction</h2>
        <TransactionList />
      </div>
      
    </div>
  );
}

function TransactionList() {
  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </div>
  );
}

function TransactionItem({ transaction }) {
  return (
    <div className={`Transaction-item ${transaction.type === 'income' ? 'income' : 'expense'}`}>
      {/* Left side */}
      <div className="left">
        <span>{transaction.description}</span>
        <span>₦{transaction.amount}</span>
      </div>

      {/* Right side */}
      <div className="right">
        <span className="type">{transaction.type}</span>
        <span className="delete">🗑️</span>
      </div>
    </div>
  );
}

export default Transaction;
