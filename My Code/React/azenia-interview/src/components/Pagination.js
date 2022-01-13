import React from 'react'

const Pagination = ({
  usersPerPage,
  totalUsers,
  setPage,
  pageNumber,
  loading,
}) => {
  return (
    <section className='pagination'>
      <button onClick={() => setPage(1)} disabled={loading}>
        first
      </button>
      <button onClick={() => setPage(pageNumber - 1)} disabled={loading}>
        previous
      </button>
      <button onClick={() => setPage(pageNumber + 1)} disabled={loading}>
        next
      </button>
      <button
        onClick={() => setPage(Math.ceil(totalUsers / usersPerPage))}
        disabled={loading}
      >
        last
      </button>
    </section>
  )
}

export default Pagination
