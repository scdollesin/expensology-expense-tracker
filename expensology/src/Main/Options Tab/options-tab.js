import './options-tab.css';
import SearchBar from '../Search Bar/search-bar.js';
import NewExpenseButton from '../New Expense Button/new-expense-btn.js';

function OptionsTab() {
    return (
        <div className="Options-tab">
            <div className="Options-left-container">
                <SearchBar/>
                <NewExpenseButton/>
            </div>
      </div>
    );
}

export default OptionsTab;