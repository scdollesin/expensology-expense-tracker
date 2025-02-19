import './main.css';
import SearchBar from './Search Bar/search-bar.js';
import NewExpenseButton from './New Expense Button/new-expense-btn.js';
import ViewToggle from './View Toggle/view-toggle.js';
import { useState } from "react";
import AddExpenseModal from './Add Expense Modal/add-expense-modal.js';

function Main() {
  const [isOpenAddExpenseModal, setIsOpenAddExpenseModal] = useState(false);

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
          <AddExpenseModal isOpen={isOpenAddExpenseModal} onClose={() => setIsOpenAddExpenseModal(false)} />
        </div>
      </main>
    </div>
  );
}

export default Main;