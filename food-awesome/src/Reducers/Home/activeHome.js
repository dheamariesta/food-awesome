
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
    case 'UPDATE_VOTE_REVIEW_IN_STORE':
      return state.reviews.map( (review) => {
        if(review._id === action.review_id){
          review.votes = action.vote
        }
        return review
      })
      break;
    default:
      return state
  }
}

export default ActiveHome;
