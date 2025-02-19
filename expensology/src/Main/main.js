import './main.css';
import SearchBar from './Search Bar/search-bar.js';
import NewExpenseButton from './New Expense Button/new-expense-btn.js';
import ViewToggle from './View Toggle/view-toggle.js';

function Main() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="Options-tab">
          <div className="Options-left-container">
              <SearchBar/>
              <NewExpenseButton/>
          </div>
          <div className="Options-right-container">
              <ViewToggle/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;