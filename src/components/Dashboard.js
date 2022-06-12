import React, { Component } from 'react'
import '../css/Dashboard.css'
import Balance from '../assets/balance.png'
import Income from '../assets/income.png'
import Expenses from '../assets/expenses.png'

const Dashboard = (props) => {

    return (
        <ul className="tab-item-list">
            <div className="tab-item">
                <div className="tab-item-left">
                    <img className="tab-item-image" src={Balance} alt="balance"/>
                </div>
                <div className="tab-item-right">
                    <p className="tab-item-title">Your Balance</p>
                    <span className="tab-item-data">Rs. {props.balanceData.balance}</span>
                </div>
            </div>
            <div className="tab-item">
                <div className="tab-item-left">
                    <img className="tab-item-image" src={Income} alt="income"/>
                </div>
                <div className="tab-item-right">
                    <p className="tab-item-title">Your Income</p>
                    <span className="tab-item-data">Rs. {props.incomeData.income}</span>
                </div>
            </div>
            <div className="tab-item">
                <div className="tab-item-left">
                    <img className="tab-item-image" src={Expenses} alt="expenses"/>
                </div>
                <div className="tab-item-right">
                    <p className="tab-item-title">Your Expense</p>
                    <span className="tab-item-data">Rs. {props.expensesData.expenses}</span>
                </div>
            </div>
        </ul>
    )
}

export default Dashboard