
const ActiveHome = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_HOME':
      return action.restaurant
      
      break;
    default:
      return state
  }
}

export default ActiveHome;
