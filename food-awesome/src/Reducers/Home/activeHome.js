
const ActiveHome = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_HOME':
      return action.restaurant
      break;
    case 'GET_REVIEWS':
      return Object.assign({}, state, {
        reviews: action.reviews
      })
      break;
    default:
      return state
  }
}

export default ActiveHome;
