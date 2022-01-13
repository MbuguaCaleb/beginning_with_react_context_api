import React, { useState, useContext } from 'react'
import { Container, Navbar, Form, Button } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {
  const { changeDefaultPageSize } = useContext(GlobalContext)

  const [customPageSizeNo, setCustomSizePageNo] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()

    changeDefaultPageSize(customPageSizeNo)
  }
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='#home'>Azenia</Navbar.Brand>

        <Form onSubmit={submitHandler} className='d-flex'>
          <Form.Control
            type='text'
            name='page_size_no'
            value={customPageSizeNo}
            onChange={(e) => setCustomSizePageNo(e.target.value)}
            placeholder='Set Custom Page No  ....'
            className='mr-sm-2 ml-sm-5'
          ></Form.Control>
          <Button type='submit' variant='outline-info' className='p-2'>
            Submit
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Header
