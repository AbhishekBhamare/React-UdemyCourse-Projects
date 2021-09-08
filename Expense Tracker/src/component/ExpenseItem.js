import React from 'react';
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    return (
       <div className="expense-item">
           <div>{(props.date).getDate().toString()}-{(props.date).getMonth().toString()}-{(props.date).getFullYear().toString()}</div>
           <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div>${props.amount}</div>
           </div>
       </div>
    )
}
