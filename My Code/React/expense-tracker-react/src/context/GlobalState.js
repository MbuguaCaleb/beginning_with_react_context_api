import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
//It is good to have everything in an Object
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
}

//Creating our Global Context
export const GlobalContext = createContext(initialState)

//Provider component
//It is wrapped around all of our components so as to have access to the global state
//I pass all my components as a children prop in my Global Context
//The provider provides both our State and actions in the component it is wrapped around.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  )
}
