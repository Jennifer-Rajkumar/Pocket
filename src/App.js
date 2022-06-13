import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TransactionForm from './components/TransactionForm'
import TransactionHistory from './components/TransactionHistory';

const App = () => {

  const [ balance, setBalance ] = useState(0)
  const [ income, setIncome ] = useState(0)
  const [ expenses, setExpenses ] = useState(0)
  const [ transactionData, setTransactionData ] = useState([])

  const handleAdd = async (data1, data2, data3) => {

    const newList = { title: data1, amount: data2, type: data3 }

    transactionData.push(newList)
    console.log(transactionData)

    if(data3==="expense") {
      setBalance(balance-parseInt(data2))
      setExpenses(expenses+parseInt(data2))
    }
    else if(data3==="income") {
      setBalance(balance+parseInt(data2))
      setIncome(income+parseInt(data2))
    }
  };

  const handleDelete = async (data) => {
    transactionData.splice(transactionData.indexOf(data),1)
    if(data.type === "expense") {
      setBalance(balance+parseInt(data.amount))
      setExpenses(expenses-parseInt(data.amount))
    }
    else if(data.type === "income") {
      setBalance(balance-parseInt(data.amount))
      setIncome(income-parseInt(data.amount))
    }
  }

  return (
    <div className="App">
      <Header/>
      <Dashboard balanceData={{balance}} incomeData={{income}} expensesData={{expenses}}/>
      <div className="main">
        <TransactionForm handleAdd={handleAdd}/>
        <TransactionHistory handleDelete={handleDelete} data={{transactionData}}/>
      </div>
    </div>
  );
}

export default App;