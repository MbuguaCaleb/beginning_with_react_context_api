import React from 'react'

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>
          {sign} Ksh{Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn'>x</button>
      </li>
    </>
  )
}

export default Transaction
