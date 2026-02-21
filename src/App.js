import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import Type from './components/Type';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <BalanceSummary />
      <hr />
      <Type />
      <hr />
      <Transaction />
      <hr />
      <AddTransaction />
      <hr />
    </div>
  );
}

export default App;
