
const ActiveHome = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_HOME':
      return {
        ...state,
        restaurant: action.restaurant
      }
      break;
    default:
      return state
  }
}

export default ActiveHome;
