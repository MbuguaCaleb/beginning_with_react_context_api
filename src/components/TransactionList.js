import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
  //How i bring in My Global State into the component
  //We can pull from our GlobalContext using useContext
  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
