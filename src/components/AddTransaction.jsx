import { useState } from 'react';

function AddTransaction({ onAddTransaction  }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!description || !amount) {
      alert('Please enter description and amount');
      return;
    }
    // Convert amount to a number
    const amountNum = Number(amount);
    if (isNaN(amountNum)) {
      alert('Please enter a valid amount');
      return;
    }

    // Add transaction to the list
    const newTransaction = {
      id: crypto.randomUUID(),
      description,
      amount: amountNum,
      type,
    };
    console.log(newTransaction);
    // Add newTransaction to the transactions list
    onAddTransaction(newTransaction);

    // Clear the form fields
    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input 
            type="text" 
            placeholder="Enter description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="form-group">
            <input 
            type="number" 
            placeholder="Enter amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} />
          </div>

          <div className="form-group">
            <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div className="button-wrapper">
          <button type="submit">
            Add Transaction
            </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
