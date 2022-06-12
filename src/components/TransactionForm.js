import React, { useState } from 'react'
import '../css/TransactionForm.css'

const TransactionForm = ({handleAdd}) => {

    const [ title, setTitle ] = useState("")
    const [ amount, setAmount ] = useState("")
    const [ type, setType ] = useState("expense")


    const handleSubmit = async (event) => {
        handleAdd(title,amount,type)
        setTitle("")
        setAmount("")
        setType("expense")
        event.preventDefault()
    }

    return (
            <form className="form-container" onSubmit={handleSubmit}>
                <h3>Add Transaction</h3>
                <div className="form-item">
                    <label for="title">TITLE</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={event => setTitle(event.target.value)}
                        placeholder="TITLE"
                        required
                    />
                </div>
                <div className="form-item">
                    <label for="amount">AMOUNT</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={event => setAmount(event.target.value)} 
                        placeholder="AMOUNT"
                        required
                    />
                </div>
                <div className="form-item">
                    <label for="type">TYPE</label>
                    <select 
                        value={type} 
                        onChange={event => setType(event.target.value)} 
                        name="type"
                        required>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
                <div className="form-item">
                    <button type="submit">ADD</button>                    
                </div>
            </form>
    )
}

export default TransactionForm