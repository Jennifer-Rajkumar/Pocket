import React, { useState } from 'react'
import '../css/TransactionHistory.css'
import Delete from '../assets/delete.png'

const TransactionHistory = (props) => {

    const [ transactionData, setTransactionData ] = useState(props.data.transactionData)

    const handleClick = (event, data) => {
        setTransactionData(transactionData.filter(item => item !== data))
        props.handleDelete(data)
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
                {!(transactionData.length===1 && 
                    transactionData[0].title==="" && 
                    transactionData[0].amount==="" && 
                    transactionData[0].type==="") && 
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