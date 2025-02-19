import './expense-table.css';

function ExpenseTable({expenses}) {

    // Sort the expenses by date with the most recent on top
    const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate total amount of expenses
    const totalAmount = sortedExpenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

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
                    {sortedExpenses.length > 0 ? (
                        sortedExpenses.map((expense, index) => (
                            <tr key={index} className="Expense-row">
                                <td className="Expense-row text number">{index + 1}</td>
                                <td className="Expense-row text">{expense.description}</td>
                                <td className="Expense-row text">$ {parseFloat(expense.amount).toFixed(2)}</td>
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
