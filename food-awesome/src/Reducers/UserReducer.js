const UserReducer = (state = {}, action) => {

  console.log(action);

  switch (action.type) {
    case "USER_UPDATE":
        return action.user || {};

    default:
        return state;
  }
}


export default UserReducer;
