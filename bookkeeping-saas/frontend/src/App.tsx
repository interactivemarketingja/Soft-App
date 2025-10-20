import React from 'react';
import './styles/app.css';
import Dashboard from './components/Dashboard';
import Invoices from './pages/Invoices';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bookkeeping SaaS</h1>
      <Dashboard />
      <Invoices />
    </div>
  );
};

export default App;