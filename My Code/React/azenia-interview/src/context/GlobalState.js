import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//set Initial State

const initialState = {
  defaultPageSize: 10,
}

//Creating our Global Context
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Actions to change PageSize
  function changeDefaultPageSize(pageSize) {
    dispatch({
      type: 'CHANGE_PAGE_SIZE',
      payload: pageSize,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        defaultPageSize: state.defaultPageSize,
        changeDefaultPageSize,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
