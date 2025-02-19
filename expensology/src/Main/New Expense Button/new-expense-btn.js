import './new-expense-btn.css';
import { IoMdAddCircleOutline } from "react-icons/io";

function NewExpenseButton() {
    return (
        <button className='New-expense-btn' type="button">
            <IoMdAddCircleOutline className="Add-icon"/>
            <p className='New-expense-text'>
                New Expense
            </p>
      </button>
    );
}

export default NewExpenseButton;