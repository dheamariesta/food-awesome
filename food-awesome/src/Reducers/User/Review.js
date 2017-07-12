
const Review = (state=[], actions) => {
  switch (actions.type) {
    case "ADD_USER_REVIEW_TO_STORE":
      return actions.reviews || {};
      break;
    default:
      return state
  }
}

export default Review;
