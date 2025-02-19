import './new-expense-btn.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";

function NewExpenseButton({ onOpen }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <button
            type="button" 
            className='New-expense-btn'
            onClick={onOpen}>
            <IoMdAddCircleOutline className="Add-icon"/>
            <p className='New-expense-text'>
                New Expense
            </p>
      </button>
    );
}

export default NewExpenseButton;