import React, { useState, useEffect, useContext } from 'react'
import { Table, ListGroup } from 'react-bootstrap'
import Pagination from './Pagination'
import { GlobalContext } from '../context/GlobalState'

export default function UserListComponent() {
  const { defaultPageSize } = useContext(GlobalContext)

  const [users, setUsers] = useState([])
  const usersPerPage = defaultPageSize
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  const USERS_URL = `https://jsonplaceholder.typicode.com/posts?page=${pageNumber}`

  const getUsers = async () => {
    setLoading(true)
    const response = await fetch(USERS_URL)
    const data = await response.json()
    setLoading(false)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const indexOfLastPage = usersPerPage * pageNumber
  const indexOfFirstPage = indexOfLastPage - usersPerPage
  const currentPageUsers = users.slice(indexOfFirstPage, indexOfLastPage)

  const setPage = (pageNumber) => {
    //check if the pageNumber is the Maximum after Next
    const maxPageNumber = Math.ceil(users.length / usersPerPage)
    const minPageNumber = 1

    if (pageNumber >= maxPageNumber) {
      setPageNumber(maxPageNumber)
    } else if (pageNumber <= minPageNumber) {
      setPageNumber(minPageNumber)
    } else {
      setPageNumber(pageNumber)
    }
    //check if the Page Number is minimum after Next
  }

  return (
    <>
      <ListGroup defaultActiveKey='#link1' className='my-3'>
        <ListGroup.Item action href='#link1'>
          New Page Url: {USERS_URL}
        </ListGroup.Item>
      </ListGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {currentPageUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        setPage={setPage}
        pageNumber={pageNumber}
      />
    </>
  )
}
