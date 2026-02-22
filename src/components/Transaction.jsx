function Transactions({ transactions, setTransactionToDelete }) {
  return (
    <div>
      <h2>Transaction</h2>

      <TransactionList
        transactions={transactions}
        setTransactionToDelete={setTransactionToDelete}
      />
    </div>
  );
}

function TransactionList({ transactions, setTransactionToDelete }) {
  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          setTransactionToDelete={setTransactionToDelete}
        />
      ))}
    </div>
  );
}

function TransactionItem({ transaction, setTransactionToDelete }) {
const formatCurrency = (amount) =>
  Number(amount).toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  });

  return (
    <div className={`Transaction-item ${transaction.type === 'income' ? 'income' : 'expense'}`}>
      <div className="left">
        <span>{transaction.description}</span>
        <span>{formatCurrency(transaction.amount)}</span>
      </div>

      <div className="right">
        <span className="type">{transaction.type}</span>

        <span className="delete" onClick={() => setTransactionToDelete(transaction.id)}>
          🗑️
        </span>
      </div>
    </div>
  );
}

export default Transactions;
