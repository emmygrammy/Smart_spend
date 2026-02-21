function AddTransaction() {
  return (
    <div className="form-container">
      <h2>Add Transaction</h2>

      <form className="transaction-form">
        <div className="form-row">
          <div className="form-group">
            <input type="text" placeholder="Enter description" />
          </div>

          <div className="form-group">
            <input type="number" placeholder="Enter amount" />
          </div>

          <div className="form-group">
            <select>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div className="button-wrapper">
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
