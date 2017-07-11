const UserReducer = (state = {}, action) => {

  // console.log(action);

  switch (action.type) {
    case "USER_UPDATE":
      // console.log("user update");
      return action.user || {};

    default:
      return state;
  }
}


export default UserReducer;
