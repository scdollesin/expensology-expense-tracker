import './main.css';
import SearchBar from './Search Bar/search-bar.js';
import NewExpenseButton from './New Expense Button/new-expense-btn.js';
import ViewToggle from './View Toggle/view-toggle.js';
import {useState, useEffect} from "react";
import AddExpenseModal from './Add Expense Modal/add-expense-modal.js';
import ExpenseTable from './Expense Table/expense-table.js';

function Main() {
  const [isOpenAddExpenseModal, setIsOpenAddExpenseModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  // Retrieve past expenses from localStorage
  useEffect(() => {
    const pastExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(pastExpenses);
  }, []);

  // Adds new expenses to the existing list
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <main className="App-main">
        <div className="Options-tab">
          <div className="Options-left-container">
            <SearchBar/>
            <NewExpenseButton onOpen={() => setIsOpenAddExpenseModal(true)}/>
          </div>
          <div className="Options-right-container">
            <ViewToggle/>
          </div>
        </div>
        <AddExpenseModal
          isOpen={isOpenAddExpenseModal}
          onClose={() => setIsOpenAddExpenseModal(false)}
          onAddExpense={handleAddExpense}
        />
        <ExpenseTable expenses={expenses} />
      </main>
    </div>
  );
}

export default Main;