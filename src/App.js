import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
      <Header />
      <BalanceSummary />
      <Transaction />
      <AddTransaction />
    </div>
  );
}

export default App;
