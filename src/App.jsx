import { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      const newExpense = { id: Date.now(), title, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setTitle('');
      setAmount('');
    }
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      {/* Form to Add Expense */}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Expense Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="number" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>

      {/* Display Expenses */}
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Display Total */}
      <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2>
    </div>
  );
}

export default App;
