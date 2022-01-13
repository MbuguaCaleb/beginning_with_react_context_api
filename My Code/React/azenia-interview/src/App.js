import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import UserListComponent from './components/UserListComponent'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <main className='py-3'>
        <Container>
          <UserListComponent />
          <Footer />
        </Container>
      </main>
    </GlobalProvider>
  )
}
export default App
