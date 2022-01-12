import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? '-' : '+'
  //How i get a action from my GlobalContext
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>
          {sign} Ksh{Math.abs(transaction.amount)}
        </span>
        <button
          className='delete-btn'
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  )
}

export default Transaction
