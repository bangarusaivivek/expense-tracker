import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
      
    </div>
  );
}

export default App;
