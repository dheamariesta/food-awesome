import axios from 'axios';
import uuid from 'uuid';

// const addReviewInStore = (newReview) => {
//   return {
//     type: 'ADD_REVIEW',
//     newReview
//   }
// }

// const addReview_id = (picReview, picReviewPublicId, reviewId, review_id) => {
//   return {
//     type: 'ADD_RESTAURENT_ID',
//     picReview,
//     picReviewPublicId,
//     reviewId,
//     review_id
//   }
// }

const addReviewIdIntoRestaurantInStore = (review_id) => {
  return {
    type: 'ADD_REVIEW_ID_TO_RESTAURANT',
    review_id,
  }
}

const loadingReviewError = (error) => {
  return{
    type: "LOAD_REVIEW_ERROR",
    error
  }
}

export const addReview = (picReview, newReview) =>{
  return (dispatch) => {
    // newReview.id = uuid.v4();
    // dispatch(addReviewInStore(newReview));

    // here picReview is a file
    let picReviewToBackEnd = new FormData();
    picReviewToBackEnd.append('picReview', picReview);
    picReviewToBackEnd.append('title', newReview.title);
    picReviewToBackEnd.append('star', newReview.star);
    picReviewToBackEnd.append('description', newReview.description);
    picReviewToBackEnd.append('user_id', newReview.user_id);

    //sending newReview to backend. no special argument, returns url, public_id, database id
    axios.post('/review/postReview/'+ newReview.restaurant_id, picReviewToBackEnd)
    .then( (response)=>{
      dispatch(addReviewIdIntoRestaurantInStore(response.data._id));
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}

const addUserReviewToStore = (reviews) => {
  return {
    type: 'ADD_USER_REVIEW_TO_STORE',
    reviews
  }
}

export const getReviewOfUser = (user_id) => {
  return (dispatch) => {
    axios.get('/review/userReviews/'+user_id)
    .then( (response) => {
      console.log(response.data)
      dispatch(addUserReviewToStore(response.data))
    }).catch( (error) => {
      dispatch(loadingReviewError(error));
    })
  }
}

export const activeReviewDetails = (review_id) => {
  return {
    type: "ACTIVE_USER_REVIEW",
    review_id
  }
}

const updateUserReviewInStore = (picReview, public_id,_id) => {
  return {
    type: "UPDATE_REVIEW_IN_STORE",
    picReview,
    public_id,
    _id
  }
}

const updateVoteReviewInStore = (vote, review_id) => {
  return {
    type: 'UPDATE_VOTE_REVIEW_IN_STORE',
    vote,
    review_id
  }
}
export const updateVote = (review_id, vote) => {

  return (dispatch) => {
    axios.put('/review/updateVote/' + review_id, {vote: vote})
    .then( (response) => {
      console.log(response.data)
      dispatch(updateVoteReviewInStore(response.data.votes, response.data._id))
    }).catch( (error) => {
      dispatch(loadingReviewError(error))
    })
  }
}
export const updateReview = (picReview, review) => {
  return (dispatch) => {
    // here picReview is a file
    let picReviewToBackEnd = new FormData();
    picReviewToBackEnd.append('picReview', picReview);
    picReviewToBackEnd.append('title', review.title);
    picReviewToBackEnd.append('star', review.star);
    picReviewToBackEnd.append('description', review.description);
    picReviewToBackEnd.append('picReviewPublicId', review.picReviewPublicId)

    // axios function to send info to backend database
    axios.put('/review/updateReview/'+review._id,picReviewToBackEnd)
    .then( (response)=>{
      // here picReview is a new url
      dispatch(updateUserReviewInStore(response.data.picReview, response.data.picReviewPublicId,response.data._id))
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}

const deleteUserReviewInStore = (_id) => {
  return {
    type: "DELETE_REVIEW_IN_STORE",
    _id
  }
}

export const deleteReview = (_id) => {
  return (dispatch) => {
    dispatch(deleteUserReviewInStore(_id));
    axios.delete('/review/deleteReview/'+_id)
    .then( (response)=>{

    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}
