function BalanceSummary({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="balance-container">
      <div>
        <h2 className="small-rectangle" 
        style={{ backgroundColor: '#28A745' }}>
          Total Income: ₦{totalIncome.toLocaleString()}
        </h2>
      </div>

      <div>
        <h2 className="small-rectangle" 
        style={{ backgroundColor: '#DC3545' }}>
          Total Expenses: ₦{totalExpenses.toLocaleString()}
        </h2>
      </div>

      <div>
        <h2 className="small-rectangle" 
        style={{ backgroundColor: '#6C757D' }}>
          Balance: ₦{balance.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}

export default BalanceSummary;
