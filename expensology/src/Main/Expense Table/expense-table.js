import './expense-table.css';
import { useState, useEffect } from "react";

function ExpenseTable() {
    const [expenses, setExpenses] = useState([]);

    // Retrieve past expenses from localStorage
    useEffect(() => {
        const pastExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        setExpenses(pastExpenses);
    }, []);

    // Calculate total amount of expenses
    const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

    return (
        <div className='Expense-table-container'>
            <table className="Expense-table">
                <thead className="Table-header">
                    <tr>
                        <th className="Table-header-text number"> </th>
                        <th className="Table-header-text description">Description</th>
                        <th className="Table-header-text amount">Amount</th>
                        <th className="Table-header-text date">Date</th>
                    </tr>
                </thead>
                <tbody className="Table-body">
                    {expenses.length > 0 ? (
                        expenses.map((expense, index) => (
                            <tr key={index} className="Expense-row">
                                <td className="Expense-row text number">{index + 1}</td>
                                <td className="Expense-row text">{expense.description}</td>
                                <td className="Expense-row text">$ {expense.amount}</td>
                                <td className="Expense-row text">{expense.date}</td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td
                                colSpan="4"
                                className="Expense-row placeholder text">
                                No expenses recorded
                            </td>
                        </tr>
                    )}
                    <tr className="Spacer-row">
                        <td colSpan="4"></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="Table-footer">
                        <td colSpan="2"></td>
                        <td className="Total-text" colSpan="1">Total</td>
                        <td className="Total-value" colSpan="1">$ {totalAmount.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ExpenseTable;
