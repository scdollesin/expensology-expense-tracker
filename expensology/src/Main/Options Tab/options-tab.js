import './options-tab.css';
import SearchBar from '../Search Bar/search-bar.js';
import NewExpenseButton from '../New Expense Button/new-expense-btn.js';
import ViewToggle from '../View Toggle/view-toggle.js';

function OptionsTab() {
    return (
        <div className="Options-tab">
            <div className="Options-left-container">
                <SearchBar/>
                <NewExpenseButton/>
            </div>
            <div className="Options-right-container">
                <ViewToggle/>
            </div>
      </div>
    );
}

export default OptionsTab;