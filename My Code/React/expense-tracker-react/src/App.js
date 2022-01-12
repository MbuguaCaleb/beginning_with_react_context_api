import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import './App.css'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    // My Components now have access to my GlobalState and Actions
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
