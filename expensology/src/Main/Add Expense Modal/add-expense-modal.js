import './add-expense-modal.css';
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function AddExpenseModal({isOpen, onClose, onAddExpense}) {
    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        date: "",
    });
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;       //Prevents the modal from rendering if it is not open

    const validateForm = () => {
        let newErrors = {};
        if (!formData.description.trim()) newErrors.description = "Description is required";
        if (!formData.amount) newErrors.amount = "Amount is required";
        if (!formData.date) newErrors.date = "Date is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully", formData);
            //Store form data in local storage upon successful submission
            const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
            const updatedExpenses = [...expenses, formData];
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

            // Pass newly added expense to Main so it can be added to the list
            onAddExpense(formData);

            handleClose();
        }
    };

    const resetForm = () => {
        setFormData({ description: "", amount: "", date: "" });
        setErrors({});
    };

    //This function handles form close by calling helper functions to reset the form and close it
    const handleClose = () => {
        resetForm();
        onClose();
    };
    
    return (
        <div className="Add-expense-modal">
            <div className="Black-overlay">
                <div className="Modal-container">
                    <button 
                        className="Close-button"
                        onClick={handleClose}>
                        <IoClose />
                    </button>
                    <h1 className="Modal-title">Add Expense</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="Modal-label">Description</label>
                        <input 
                            type="text" 
                            name="description"
                            className="Modal-input-field"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        {errors.description && <p className="Error-message">{errors.description}</p>}

                        <label className="Modal-label">Amount</label>
                        <input 
                            type="number"
                            name="amount"
                            className="Modal-input-field"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                        {errors.amount && <p className="Error-message">{errors.amount}</p>}

                        <label className="Modal-label">Date</label>
                        <input 
                            type="date" 
                            name="date"
                            className="Modal-input-field date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        {errors.date && <p className="Error-message">{errors.date}</p>}

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