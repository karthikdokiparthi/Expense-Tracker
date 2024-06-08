import React from 'react';
import { Head } from './components/Head';
import { Balance } from './components/Balance';
import { Income } from './components/Income';
import { TransactionList } from './components/TransactionList';
import { AddTran } from './components/AddTran';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <>
      <GlobalProvider>
        <Head />
        <div className="container">
          <Balance />
          <Income />
          <TransactionList />
          <AddTran />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;