import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
//It is good to have everything in an Object
const initialState = {
  transactions: [],
}

//Creating our Global Context
export const GlobalContext = createContext(initialState)

//Provider component
//It is wrapped around all of our components so as to have access to the global state
//I pass all my components as a children prop in my Global Context
//The provider provides both our State and actions in the component it is wrapped around.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Actions

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
