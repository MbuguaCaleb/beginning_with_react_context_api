export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE_SIZE':
      return {
        ...state,
        defaultPageSize: action.payload,
      }

    default:
      return state
  }
}
