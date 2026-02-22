import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import Type from './components/Type';
import ConfirmModal from './components/ConfirmModal.jsx';
import Transactions from './components/Transaction';



const initialTransactions = [
  {
    description: 'Salary',
    amount: 45000,
    type: 'income',
    id: 1,
  },
  {
    description: 'Groceries',
    amount: 6000,
    type: 'expense',
    id: 2,
  },
  {
    description: 'Freelance Project',
    amount: 15000,
    type: 'income',
    id: 3,
  },
  {
    description: 'Rent',
    amount: 12000,
    type: 'expense',
    id: 4,
  },
];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const addTransaction = (transaction) => {
    // Add new transaction to the transactions list
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filterType === 'all') {
      return true;
    }
    return transaction.type === filterType;
  });

  return (
    <div className="App">
      <Header />
      <hr />
      <BalanceSummary />
      <hr />

      <Type 
      filterType={filterType} 
      setFilterType={setFilterType} />
      <hr />

      {transactionToDelete && (
        <ConfirmModal
          onConfirm={() => {
            deleteTransaction(transactionToDelete);
            setTransactionToDelete(null);
          }}
          onCancel={() => setTransactionToDelete(null)}
        />
      )}
      <Transactions
        transactions={filteredTransactions}
        onDeleteTransaction={deleteTransaction}
        transactionToDelete={transactionToDelete}
        setTransactionToDelete={setTransactionToDelete}
      />
      <hr />
      <AddTransaction onAddTransaction={addTransaction} />
      <hr />
    </div>
  );
}

export default App;
