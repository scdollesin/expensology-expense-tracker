import './add-expense-modal.css';
import { IoClose } from "react-icons/io5";

function AddExpenseModal({isOpen, onClose}) {
    if (!isOpen) return null;       //Prevents the modal from rendering if it is not open

    return (
        <div className="Add-expense-modal">
            <div className="Black-overlay">
                <div className="Modal-container">
                    <button 
                        className="Close-button"
                        onClick={onClose}>
                        <IoClose />
                    </button>
                    <h1 className="Modal-title">Add Expense</h1>
                    <form>
                    <label className="Modal-label">Description</label>
                    <input 
                        type="text" 
                        className="Modal-input-field"/>
                    <label className="Modal-label">Amount</label>
                    <input 
                        type="number" 
                        className="Modal-input-field"/>
                    <label className="Modal-label">Date</label>
                    <input 
                        type="date" 
                        className="Modal-input-field date"/>
                    <button 
                        type="submit" 
                        className="Submit-btn">
                        Submit
                    </button>
                    </form>
                </div>
            </div>   
        </div>
    );
}

export default AddExpenseModal;