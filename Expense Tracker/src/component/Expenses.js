import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import ExpensesChart from './ExpensesChart'
import './ExpenseItem.css'

export default function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        console.log(props)
        setFilterYear(selectedYear)
    }

    const filteredExpenses = props.expense.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })
    return (
        <div className="expenses">
            <ExpenseFilter  selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            {
                filteredExpenses.length ? filteredExpenses.map((obj) => {
                return <ExpenseItem key={obj.id} title={obj.title} amount={obj.amount} date={obj.date}></ExpenseItem>
                }) : <div className="expense-item">No Data Found</div>
            }

        </div>
    )
}
