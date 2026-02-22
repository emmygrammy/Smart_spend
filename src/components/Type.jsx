function Type({ filterType, setFilterType }) {
  return (
    <div className="type-container">
      <div
        className={`type-box ${filterType === 'all' ? 'active' : ''}`}
        onClick={() => setFilterType('all')}
      >
        <span>All</span>
      </div>

      <div
        className={`type-box ${filterType === 'income' ? 'active' : ''}`}
        onClick={() => setFilterType('income')}
      >
        <span>Income</span>
      </div>

      <div
        className={`type-box ${filterType === 'expense' ? 'active' : ''}`}
        onClick={() => setFilterType('expense')}
      >
        <span>Expense</span>
      </div>
    </div>
  );
}

export default Type;
