import React, { useState } from 'react'
import '../css/TransactionHistory.css'
import Delete from '../assets/delete.png'

const TransactionHistory = (props) => {

    const [ transactionData, setTransactionData ] = useState(props.data.transactionData)

    const handleClick = async (event, data) => {
        props.handleDelete(data)
        console.log(transactionData)
    }

    return (
        <div className="transaction-register">
            <h3>History</h3>
            <ul className="register-list">
                <li className="register-list-item">
                    <h4>Title</h4>
                    <h4>Amount</h4>
                    <h4>Type</h4>
                    <h4> </h4>
                </li>
                {
                    transactionData.map(data => (
                    <div className="register-item">
                        <p>{data.title}</p>
                        <p>{data.amount}</p>
                        <p>{data.type}</p>
                        <img src={Delete} className="register-item-image" alt="delete" onClick={event => handleClick(event, data)}/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TransactionHistory