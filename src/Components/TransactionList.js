import React,{ useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    const transactionJSX = transactions.map((transaction) => {
        const sign = transaction.amount < 0 ? '-' : '+';
        const colorClass = transaction.amount < 0 ? 'minus' : 'plus';
        return(
            <li key={transaction.id}  className={colorClass}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
            </li>
        )
    })
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactionJSX}
            </ul>
        </>
    )
}

export default TransactionList
